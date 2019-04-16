<?php

namespace Drupal\demoasterics\Alerts;

class AlertManager {
    
    private $user;
    private $suscribed = array();
    private $alerts = array();
    
    public function __construct() {
        $this->user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
        $connection = \Drupal::database();
        $query = $connection->select('taxonomy_term_data', 't');
        $query->join('taxonomy_term__field_observatory_suscribers', 'subscr', 'subscr.entity_id = t.tid');
        $this->suscribed = $query->condition('t.vid','observatories')
                        ->condition('subscr.field_observatory_suscribers_target_id',$this->user->id())
                        ->fields('t', ['tid'])
                        ->execute()
                        ->fetchAll();
        if(!empty($this->suscribed)) {
            $alerts = array();
            foreach($this->suscribed as $observatory ) {
                //*** OBSERVACIONS DEMANDADES ***//
                $query = $connection->select('webform_submission_data', 'o');
                $query->join('webform_submission','s','s.sid=o.sid');
                $result = $query->condition('o.webform_id','observacion')
                                ->condition('o.name','observatory')
                                ->condition('o.value',$observatory->tid)
                                ->fields('o',['sid'])
                                ->fields('s',['created'])
                                ->execute()
                                ->fetchAll();
                foreach($result as $petition) {
                    $alerts[$petition->created] = array('type' => 'petition', 'sid' => $petition->sid);
                }
                //*** EVENTS CREATS ***//
                $query = $connection->select('node_field_data','n');
                $query->join('node__field_event_category_n','obs','obs.entity_id=n.nid');
                $result = $query->condition('n.type','event')
                                ->condition('obs.field_event_category_n_target_id',$observatory->tid)
                                ->fields('n',['nid','created'])
                                ->execute()
                                ->fetchAll();
                 foreach($result as $event) {
                    $alerts[$event->created] = array('type' => 'event', 'nid' => $event->nid);
                }
            }
            // LES ULTIMES 12 NOTIFICACIONS //
            krsort($alerts);
            $this->alerts = array_slice($alerts,0,12);
        }
    }
    
    public function isSuscribed() {
        return !empty($this->suscribed);
    }
    
    public function getCountAlerts() {
        return count($this->alerts);
    }
    
    public function notifications() {
        
        return '<div class="notifications">
                    <ul>
                      <li class="observatory">
                        <div class="image">
                          <img src="/themes/custom/asterics/src/images/notify.jpg" alt="notify image">
                        </div>
                        <div class="box">
                          <div class="category">Monte Palomar Observatory</div>
                          <div class="title">Notification title lorem ipsum</div>
                          <div class="date">14/03/2019 6:10 pm</div>
                        </div>
                      </li>
                      <li class="new">
                        <div class="image">
                          <img src="/themes/custom/asterics/src/images/notify2.jpg" alt="notify image">
                        </div>
                        <div class="box">
                          <div class="category">Monte Palomar Observatory</div>
                          <div class="title">Discovery of Planets Around Stars</div>
                          <div class="date">25/03/2019</div>
                        </div>
                      </li>
                    </ul>
                    <a href="#" class="button">All Alerts</a>
                  </div>';
    }
    
}
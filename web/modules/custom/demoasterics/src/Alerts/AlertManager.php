<?php

namespace Drupal\demoasterics\Alerts;

class AlertManager {
    
    private $user;
    private $suscribed = array();
    
    public function __construct() {
        $this->user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
        $connection = \Drupal::database();
        $query = $connection->select('taxonomy_term_data', 't');
        $query->join('taxonomy_term__field_observatory_suscribers', 'subscr', 'subscr.entity_id = t.tid');
        $this->suscribed = $query->condition('t.vid','observatories')
                        ->condition('subscr.field_observatory_suscribers_target_id',$this->user->id())
                        ->fields('t', ['tid'])
                        ->execute()
                        ->fetchObject();
        kint(empty($this->suscribed));
    }
    
    public function isSuscribed() {
        return !empty($this->suscribed);
    }
    
    public function getCountAlerts() {
        
        return '0';
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
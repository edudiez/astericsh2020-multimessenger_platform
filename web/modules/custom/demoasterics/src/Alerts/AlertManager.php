<?php

namespace Drupal\demoasterics\Alerts;

class AlertManager {
    
    private $user;
    private $suscribed = array();
    
    public function __construct() {
        $this->user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
    }
    
    public function isSuscribed() {
        if(empty($suscribed)) {return false;}
        return true;
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
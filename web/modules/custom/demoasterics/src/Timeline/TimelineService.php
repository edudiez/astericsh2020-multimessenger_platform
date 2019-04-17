<?php

namespace Drupal\demoasterics\Timeline;

class TimelineService {
    
    public function __construct() {}
    public function getTimeline() {
        $timeline = array('#markup' => '<div id="timeline">TIMELINE</div>');
        return $timeline;
    }
}
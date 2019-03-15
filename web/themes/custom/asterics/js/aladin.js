(function($, Drupal, drupalSettings) {
 
    Drupal.aladin = Drupal.aladin || {};
    
    Drupal.aladin.Aladin = function(settings) {
        console.log(settings);
        var aladin = A.aladin('#aladin-lite-div',{survey :settings.survey,fov : settings.fov});
        console.log(aladin);
    }
    
    Drupal.behaviors.Aladin = {
        attach : function (context,settings) {
            if(settings.aladin) {
                 console.log(drupalSettings.aladin);
                if(Drupal.aladin[0] === undefined) {
                    Drupal.aladin[0] = new Drupal.aladin.Aladin(drupalSettings.aladin);
                }
            }
        }
    }
    
})(jQuery, Drupal, drupalSettings);
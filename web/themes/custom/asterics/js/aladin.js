(function($) {
 
    Drupal.aladin = Drupal.aladin || {};
    
    Drupal.aladin.Aladin = function(settings) {
        var aladin = A.aladin('#aladin-lite-div',{survey :settings.survey,fov : settings.fov});
    }
    
    Drupal.behaviors.Aladin = {
        attach : function (context,settings) {
            if(settings.aladin) {
                if(Drupal.aladin[0] === undefined) {
                    Drupal.aladin[0] = new Drupal.aladin.Aladin(settings.aladin);
                }
            }
        }
    }
    
    
    
})(jQuery);
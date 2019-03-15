( function ($, Drupal, drupalSettings) {
    $(document).ready(function() {
        $('header .right .top .ico-menu').click(function() {
            $(this).toggleClass("active");
            $('#main-menu').fadeToggle();
        });
    });
    
    /** PASWORD RESET BEHAVIOUR **/
    Drupal.behaviors.PasswordReset = {
        attach : function (context,settings) {
            if(settings.passreset) {
                $('.user-pass-reset .form-submit').trigger('click');
            }
        }
    }
    /** PASWORD RESET BEHAVIOUR **/
    
    
})(jQuery, Drupal, drupalSettings);
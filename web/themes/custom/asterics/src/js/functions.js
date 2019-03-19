( function ($, Drupal, drupalSettings) {
    $(document).ready(function() {
        $('header .right .top .ico-menu').click(function() {
            $(this).toggleClass("active");
            $('#main-menu').fadeToggle();
        });
        //* USER TABS */
        if($('#usertabs')) {
            $('#usertabs').tabs();
            $('#observatories').tabs();
            $('#observations').tabs();
            $('#newsevents').tabs();
        }
        
        if($('#forms-wrapper')) {
            $('#newobservatori').click(function() {
                $('#forms-wrapper').empty();
                $('#forms-wrapper').append('<iframe></iframe>');
                var frame = $($('#forms-wrapper').children('iframe'));
                frame.attr('width','100%');
                frame.attr('height','100%');
                frame.attr('src','/db_backend/structure/taxonomy/manage/observatories/add');
                $('#forms-wrapper').show();
            });
        }
        if($('#observation-form-wrapper')) {
            $('#askobervation').click(function() {
                $('#observation-form-wrapper').show();
            });
        }
        /*
        if($('#myevents')) {
            $('#newevent').click(function() {
                $('#myevents').empty();
                $('#myevents').append('<iframe></iframe>');
                var frame = $($('#myevents').children('iframe'));
                frame.attr('width','100%');
                frame.attr('height','100%');
                frame.attr('src','/node/add/event');
                $('#myevents').show();
            });
        }
        */
        
        
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
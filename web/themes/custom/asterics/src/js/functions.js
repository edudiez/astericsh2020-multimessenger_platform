( function ($, Drupal, drupalSettings) {
    $(document).ready(function() {

      userBox();

        $('header .right .top .ico-menu').click(function() {
          $(this).toggleClass("active");
          $('body').toggleClass('no_scroll');
          // $('#main-menu').fadeToggle();
          if ($('#main-menu').is(':visible')){
            $('#main-menu').fadeOut();
          } else {
            $('#main-menu').fadeIn().css('display', 'flex');
          }
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
                $('#forms-wrapper').show();
            });
            $('#forms-wrapper .close').click(function() {
                $('#forms-wrapper').hide();
            });
        }
        if($('#observation-form-wrapper')) {
            $('#askobervation').click(function() {
                $('#observation-form-wrapper').slideToggle();
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

    function userBox(){
      if ($('.user_box span').length){
        $('.user_box span').click(function(e){

          $(this).next().slideToggle();
        });
      }
    }

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

( function ($, Drupal, drupalSettings) {

    $(document).ready(function() {

      userBox();
      followControl();

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
            $('.observation-map .close').click(function () {
                $('#observation-form-wrapper.observation-map').hide();
            });
        }
        if($('#search-observation-form-wrapper')) {
            $('.observation-map .close').click(function () {
                $('#search-observation-form-wrapper.observation-map').hide();
            });
        }

        if($('.view_obervatories-map')) {
            $('.image-before').click(function() {
                window.location.href ='/celestial-map';
            });
            $('.image-after').click(function () {
                $('#observation-form-wrapper.observation-map').css('display','flex');
            });
            $('.askfor').click(function () {
                $('#observation-form-wrapper.observation-map').css('display','flex');
            });
            $('.searchfor').click(function () {
                $('#search-observation-form-wrapper.observation-map').css('display','flex');
            });
        }

    });
/* PASSEM DEL FOLLOW / UNFOLLOW A SUSCRIBE / UNSUSCRIBE */
/*
    function followControl() {

      const followMessage = $('<div class="follow_message"><div class="box"><span class="close"></span>Now you follow this observatory</div></div>').hide();
      const unFollowMessage = $('<div class="follow_message"><div class="box"><span class="close"></span>You have stopped following this observatory</div></div>').hide();

      unFollowMessage.add(followMessage).find('.close').click(function(){
        $(this).closest('.follow_message').fadeOut().remove();
        $('body').removeClass('no_scroll');
      })

      followButtonControl($('.follow a, .follow span'));
      unFollowButtonControl($('.unfollow a, .unfollow span'));

      function followButtonControl(elem){
        elem.each(function(){
          $(this).click(function(e){
            e.preventDefault();
            $('body').append(followMessage.clone(true));
            $('.follow_message').fadeIn();
            $('body').addClass('no_scroll');
            $(this).unbind('click');
            if (reverseText($(this)))
              unFollowButtonControl($(this));
          })
        })
      }

      function unFollowButtonControl(elem){
        elem.each(function(){
          $(this).click(function(e){
            e.preventDefault();
            $('body').append(unFollowMessage.clone(true));
            $('.follow_message').fadeIn();
            $('body').addClass('no_scroll');
            $(this).unbind('click');
            if (reverseText($(this)))
              followButtonControl($(this));
          })
        })
      }

      function reverseText(elem){
        if (elem.hasClass('reverse')){
          var actualReverseText = elem.text();
          elem.html(elem.attr('data-reverse'));
          elem.attr('data-reverse', actualReverseText);
          return true;
        }
        return false;
      }
    }

    function userBox(){
      if ($('.user_box span').length){
        $('.user_box span').click(function(e){

          $(this).next().slideToggle();
        });
      }
    }
    */

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

( function ($) {
    $(document).ready(function() {
        $('header .right .top .ico-menu').click(function() {
            $(this).toggleClass("active");
            $('#main-menu').fadeToggle();
        });
    });
})(jQuery);
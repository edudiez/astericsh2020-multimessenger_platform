(function ($) {

  console.log('flexslider.js loaded');

  $(document).ready(function(){

    // EVA noticias - TX observatorio
    if ($('.view-id-news.view-display-id-entity_view_2').length) {
      $('.view-id-news.view-display-id-entity_view_2').flexslider({
        selector: ".view-content > .views-row",
        animation: "slide",
        // controlNav: true,
        directionNav: false,
        start: function(slider){
          slider.fadeIn();
        }
      })
    }

    // PR - SLIDER
    if ($('.ptype_slider').length) {
      $('.ptype_slider').flexslider({
        selector: ".field_g_paragraphs > .field-item",
        animation: "slide",
        controlNav: false,
        start: function(slider){
          slider.fadeIn();
        }
      })
    }

    // CAROUSEl PRODUCTO
    if ($('.node.producto.full .wrapper').length) {
      $('.wrapper').flexslider({
        selector: ".slides li",
        animation: "fade",
        directionNav: false,
        slideshow: false,
        controlNav: 'thumbnails',
        start: function(slider){
          slider.fadeIn();
        }
      })
    }
  })

}(jQuery));

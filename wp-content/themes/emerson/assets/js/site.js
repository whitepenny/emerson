//=require picturefill/dist/picturefill.min.js

//=require formstone/dist/js/core.js
//=require formstone/dist/js/background.js
//=require formstone/dist/js/checkpoint.js
//=require formstone/dist/js/mediaquery.js
//=require formstone/dist/js/navigation.js
//=require formstone/dist/js/swap.js
//=require formstone/dist/js/transition.js

document.createElement( "picture" );

(function($) {

  Formstone.Ready(function() {

    $(".js-background").background();
    $(".js-checkpoint, [data-checkpoint-animation]").checkpoint({
      offset: 100,
      reverse: true
    });
    $(".js-navigation").navigation();
    $(".js-swap").swap();

    // $(window).on("scroll", function() {
    //   var scrolTop = $(window).scrollTop();
    //
    //   if (scrolTop > 50) {
    //     $(".header").addClass("scrolled");
    //   } else {
    //     $(".header").removeClass("scrolled");
    //   }
    // });

  });

})(jQuery);

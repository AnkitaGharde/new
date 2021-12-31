 var wwt = $(window).width();
 if (wwt > 767) {
     function sticky_relocate() {
         var window_top = $(window).scrollTop();
         var footer_top = $("#footer-bottom").offset().top;
         var div_top = $('#sticky-anchor').offset().top;
         var div_height = $(".sticky-side-bar").height();

         var padding = 20; // tweak here or get from margins etc

         if (window_top + div_height > footer_top - padding)
             $('.sticky-side-bar').css({
                 top: (window_top + div_height - footer_top + padding) * -1
             });
         else if (window_top > div_top) {
             $('.sticky-side-bar').addClass('stick');
             $('.sticky-side-bar').css({
                 top: 20
             });
         } else {
             $('.sticky-side-bar').removeClass('stick');
         }
     }

     function sticky_relocate_left() {
         var window_top = $(window).scrollTop();
         var footer_top = $("#footer-bottom").offset().top;
         var div_top = $('#sticky-anchor').offset().top;
         var div_height = $(".sticky-side-left").height();

         var padding = 20; // tweak here or get from margins etc

         if (window_top + div_height > footer_top - padding)
             $('.sticky-side-left').css({
                 top: (window_top + div_height - footer_top + padding) * -1
             });
         else if (window_top > div_top) {
             $('.sticky-side-left').addClass('stick');
             $('.sticky-side-left').css({
                 top: 20
             });
         } else {
             $('.sticky-side-left').removeClass('stick');
         }
     }
     $(function() {
         $(window).scroll(sticky_relocate);
         sticky_relocate();
         $(window).scroll(sticky_relocate_left);
         sticky_relocate_left();
     });
 }
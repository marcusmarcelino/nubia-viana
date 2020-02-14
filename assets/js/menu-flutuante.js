$(window).scroll(function() {    
   var scroll = $(window).scrollTop();
   if (scroll >= 40) {               
         $("#nav").addClass("ativo");    
   } else {
         $("#nav").removeClass("ativo");
   }
});
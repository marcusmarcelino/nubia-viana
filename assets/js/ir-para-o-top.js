$(document).ready(function(){
   $('a[href="#top"]').click(function(){
         $('html, body').animate({scrollTop : 0},100);
         return false;
   });
});
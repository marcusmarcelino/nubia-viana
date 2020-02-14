new Vue({
   el: '#minha-equipe',
   data: {
     slides: 7
   },
   components: {
     'carousel-3d': Carousel3d.Carousel3d,
     'slide': Carousel3d.Slide
   }
});
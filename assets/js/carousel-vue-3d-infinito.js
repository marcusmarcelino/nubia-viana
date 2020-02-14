new Vue({
   el: '#minha-equipe',
   data: {
    slides: [
      {
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/nubia.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      },{
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/amigas.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      },{
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/familia.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      },{
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/familia2.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      }, {
        title: 'Imobiliária Vasconcelos',
        mainSrc: 'assets/img/familia2.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Site',
      }, {
        title: 'Kevin Arquitetura',
        mainSrc: 'assets/img/familia1.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Site',
      }, {
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/familia2.jpg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      }, {
        title: 'Mundo da Babi',
        mainSrc: 'assets/img/casal-evento.jpeg',
        logoSrc: '',
        href:'',
        name: 'Jone',
        desc: 'Frase ou curto texto relacionado ao funcionado em questão',
        tag: 'Blog',
      }
    ]
   },
   components: {
     'carousel-3d': Carousel3d.Carousel3d,
     'slide': Carousel3d.Slide
   }
});
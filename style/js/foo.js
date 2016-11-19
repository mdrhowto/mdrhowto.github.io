$(document).ready(function(){
  $('.carousel').slick({
  //  https://github.com/kenwheeler/slick/
        arrows: true
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    
    // the magic
    responsive: [{

      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true
      }

    }, {

      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        dots: true
      }

    }, {

      breakpoint: 400,
      slidesToShow: 1
      //settings: "unslick" // destroys slick

    }]

    });
});
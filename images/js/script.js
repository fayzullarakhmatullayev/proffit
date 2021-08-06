$(document).ready(function () {
    $('.intro-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="prev-btn"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn"><i class="fa fa-chevron-right"></i></button>'
    })
    $('.result-slider').slick({
        slidesToShow:1,
        slidesToScroll:1,
        infinite: false,
        dots: true,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
    });
    $('.tasks-slider').slick({
        slidesToShow:4,
        slidesToScroll:1,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
    })
    $('.article-slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
    })
    $('.blog-page__image-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        asNavFor: '.blog-page__image-small',
        prevArrow: '<button class="prev-bg-btn slick-bg-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-bg-btn slick-bg-button"><i class="fa fa-chevron-right"></i></button>',
      });
      $('.blog-page__image-small').slick({
        slidesToShow: 3,
        infinite: false,
        slidesToScroll: 1,
        asNavFor: '.blog-page__image-big',
        focusOnSelect: true,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
          {
            breakpoint: 538,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.direction-work__slider').slick({
        dots: true,
        infinite: false,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
      })
    $('.laptop-media').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,
        fade: true,
        asNavFor: '.laptop-slider__content'
      });
      $('.laptop-slider__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        asNavFor: '.laptop-media',
        dots: true,
        focusOnSelect: true,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
      });
      $('.sertificate-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        infinite: false,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
        responsive: [
        {
            breakpoint: 1199,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
            }
        },
        {
            breakpoint: 991,
             settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
            }
        },
        {
            breakpoint: 567,
             settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
            }
        },
        ]
      })
      $('.services-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>' 
      });
      $(document).on('click', '.solution-blog__btn', function (e) {
        e.preventDefault();
        $('.solution-hidden').slideDown(300);
      }); 
      $(document).on('click', '#js-btn-1',function(e){
        e.preventDefault();
        $('.js-packet-modal-1').animate({
          top: 50 +'%'
        })
      })
      $(document).on('click', '#js-btn-2',function(e){
        e.preventDefault();
        $('.js-packet-modal-2').animate({
          top: 50 +'%'
        })
      })
      $(document).on('click', '#js-btn-3',function(e){
        e.preventDefault();
        $('.js-packet-modal-3').animate({
          top: 50 +'%'
        })
      })
      $(document).on('click','.packet-content__close, .packet-btn',function(e){
        e.preventDefault();
        $('.packet-modal').animate({
          top: -100 +'%'
        })
      })
    $(document).on('click', '.blog-article__more', function(e){
        e.preventDefault();
        $('.blog-article__tags-hidden').slideToggle(150).css('display', 'flex');
    })
    $(document).on('click', '.contact-tab__btn, .product-media__item', function(e){
        e.preventDefault();
        $('.map-active').removeClass('map-active');
        $(this).addClass('map-active');
        
        let href = $(this).attr('href');
        $(href).addClass('map-active');
    });
    $(document).on('click', '.answer-tab__btn1', function(e){
        e.preventDefault();
        $('.map-active1').removeClass('map-active1');
        $(this).addClass('map-active1');
        
        let href = $(this).attr('href');
        $(href).addClass('map-active1');
    });
    $(document).on('click', '.answer-tab__btn2', function(e){
        e.preventDefault();
        $('.map-active2').removeClass('map-active2');
        $(this).addClass('map-active2');
        
        let href = $(this).attr('href');
        $(href).addClass('map-active2');
    });
    $(document).on('click', '.answer-tab__btn3', function(e){e.preventDefault()});
    $('.js-chart-number, .js-about-number').counterUp({
      time: 1000,
      formatter: function (n) {
        return n.replace(/,/g, ',');
      }
    })
    $(document).on('click', '.digital-table__btn', function(e){
      e.preventDefault();
      $('.digital-table__wrapper').slideToggle(300)
    })
    $('.intro-content__btn, .nav-contact__order, .oborod-nav__link').click(function (e) {
      e.preventDefault();
      let href = $(this).attr('href');

      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, 700);
      return false;
  });
  
  function filter(card){
    $('.solution-card__wrapper').filter(card).slideDown(300);
    $('.solution-card__wrapper').not(card).slideUp(300);
  };

  $('.solution-page__link').click(function(e){
    e.preventDefault();
    $('.solution-page__link').removeClass('active');
    $(this).addClass('active');
    var dataFilter = $(this).attr('data-filter');
    filter('.' + dataFilter);
  });
  
  $(document).on('click', '.direction-info__title', function(){
    if(!$(this).hasClass('tab-active')){
        $('.direction-info__ul').slideUp();
        $(this).next().slideDown();
        $(this).addClass('tab-active');
    } else {
        $('.direction-info__title').removeClass('tab-active');
        $('.direction-info__ul').slideUp();
    }
  });
  $(document).on('click' ,'.nav-mobile__burger', function(){
    $('.nav-mobile__burger, .nav-menu').toggleClass('menu-open')
  })
  $(document).on('click', ".span-wrapper", function(){
    $('.nav-menu').removeClass('menu-open')
  }) 
  $(document).on('click', '.menu-open .nav-menu__link-one', function(e){
    e.preventDefault();
    $('.nav-dropdown-one').slideToggle(300)
  })
  $(document).on('click', '.menu-open .nav-menu__link-two', function(e){
    e.preventDefault();
    $('.nav-dropdown-two').slideToggle(300)
  })
  $(document).on('click', '.menu-open .nav-menu__link-three', function(e){
    e.preventDefault();
    $('.nav-dropdown-three').slideToggle(300)
  })
  $(document).on('click', '.footer-blog__title1', function(e){
    e.preventDefault();
    $('.footer-blog__menu1').slideToggle(300);
  })
  $(document).on('click', '.footer-blog__title2', function(e){
    e.preventDefault();
    $('.footer-blog__menu2').slideToggle(300);
  })
  $(document).on('click', '.footer-blog__title3', function(e){
    e.preventDefault();
    $('.footer-blog__menu3').slideToggle(300);
  })
  $('.about-paralix__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    mobileFirst: true,
    dots: true,
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
        {
            breakpoint: 9999,
            settings: "unslick"
        },
        {
            breakpoint: 1199,
             settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
            }
        },
        {
          breakpoint: 991,
           settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
          }
        },
        {
          breakpoint: 575,
           settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
          }
        },
        {
          breakpoint: 0,
           settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
          }
        },
    ]
  });
  
  $('.packets-slider').slick({
    mobileFirst: true,
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
    {
        breakpoint: 9999,
        settings: "unslick"
    },
    {
        breakpoint: 991,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 963,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    {
        breakpoint: 0,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
        }
    },
    ]
  })
  $(document).on('click', '.partners-blog__btn', function(e){
    e.preventDefault();
    $('.hidden__items').slideDown(300).css('display', 'flex');
  })
  $('.numbers__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
    dots: true,
    responsive: [
      {
        breakpoint: 727,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true
        }
      }
    ]
  })
  $(function(){
    $(window).bind("resize",function(){
     if($(this).width() < 991){
       $('.about-support__title').addClass('about-support__toggle');
       $('.about-support__wrapper').css('display', 'none');
     }
     else{
       $('.about-support__title').removeClass('about-support__toggle');
       $('.about-support__wrapper').css('display', 'block');
     }
    }).resize();
 });
  $(document).on('click','.about-support__toggle', function(){
    if(!$(this).hasClass('open')){
      $('.about-support__wrapper').slideUp();
      $(this).next().slideDown();
      $(this).addClass('open');
    } else {
        $('.about-support__toggle').removeClass('open');
        $('.about-support__wrapper').slideUp();
    }
  })
  $(".control-slider, .fuel-info__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 727,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  })
  $('.answer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>'
  })
  $('.why-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true, 
    prevArrow: '<button class="prev-btn slick-button"><i class="fa fa-chevron-left"></i></button>',
    nextArrow: '<button class="next-btn slick-button"><i class="fa fa-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 727,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  })
});
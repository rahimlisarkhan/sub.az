const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1.5 ,
    grid: {
        rows: 1,
      },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

    mousewheel: {
        forceToAxis: true,
      },

    breakpoints: {
        450: {
            slidesPerView: 2.5,
        },
        640: {
            slidesPerView: 2.5,
        },
        940: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 5,
        },
        1280: {
            slidesPerView: 4,
        },
        1500: {
            slidesPerView: 6,
        },
        2000: {
            slidesPerView: 7,
        },
    },
  });

//   const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,
//     slidesPerView: 1 ,
//     grid: {
//       rows: 1,
//     },
  
//     breakpoints: {
      
//         640: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//         1280: {
//             slidesPerView: 4,
//           },
//           1300: {
//             slidesPerView: 5,
//           },
//       },
    
//     mousewheel: {
//       forceToAxis: true,
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
  
//   });

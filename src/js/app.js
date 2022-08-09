// preloader
let
   body = document.querySelector('body'),
   images = document.images,
   images_total_count = images.length,
   images_loaded_count = 0,
   perc_display = document.getElementById('load-perc');
for (let i = 0; i < images_total_count; i++) {
   let image_clone = new Image();
   image_clone.onload = image_loaded;
   image_clone.onerror = image_loaded;
   image_clone.src = images[i].src;
};
function image_loaded() {
   images_loaded_count++;
   perc_display.innerHTML = (((100 / images_total_count) * images_loaded_count) << 0) + '%';
   if (images_loaded_count >= images_total_count) {
      document.body.onload = function () {
         body.classList.add('no-overflow');
         setTimeout(function () {
            var preloader = document.querySelector('.preloader-bg');
            if (!preloader.classList.contains('.done')) {
               preloader.classList.add('done');
               body.classList.remove('no-overflow');
            }
         }, 1500);
      };
   }
};
// scroll
const anchors = document.querySelectorAll('a');

for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}
// scroll to top
const goToTopBtn = document.getElementById('go-to-top');
window.addEventListener('scroll', function () {
   if (window.scrollY >= 300) {
      goToTopBtn.classList.add('visible');
   } else if (window.scrollY < 300) {
      goToTopBtn.classList.remove('visible');
   }
});
// swiper
const swiper = new Swiper('.swiper', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 40,
   autoplay: true,
   speed: 800,
   breakpoints: {
      842: {
         slidesPerView: 3,
      },
   },
   navigation: {
      nextEl: '.swiper-button_next',
      prevEl: '.swiper-button_prev',
   },
   pagination: {
      el: '.swiper-pagination-fraction',
      type: 'fraction',
   }
});

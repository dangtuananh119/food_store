const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Menu navbar
const navbar = $('.header__nav');
const menuBtn = $('.header__nav-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Home slider
var swiper = new Swiper(".home__slides", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
});

// Food
var swiper = new Swiper(".food__slides", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

// Food Preview
let foodCloses = $$('.food-preview__close');
let foodSlides = $$('.food__slide');
let foodPreviewContainer = $('.food-previews');
let foodPreviews = $$('.food-preview__box');


foodSlides.forEach(food => {
  food.onclick = () => {
    foodPreviewContainer.style.display = 'flex';
    let name = food.getAttribute('data-name');
    foodPreviews.forEach(foodPre => {
      let target = foodPre.getAttribute('data-target');
      if(target === name) {
        foodPre.classList.add('active');
      }
    })
  }
});

foodCloses.forEach(foodClose => {
  foodClose.onclick = () => {
    foodPreviewContainer.style.display = 'none';
    foodPreviews.forEach(foodPre => {
      foodPre.classList.remove('active');
    })
  }
})

// Gallery
// const galleryContainer = $('.gallery__container');

// lightGallry(galleryContainer);

// Menu
var swiper = new Swiper(".menu__slides", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoHeight: true,
  spaceBetween: 20,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
  },
});


// Blogs
var swiper = new Swiper(".blogs__container", {
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  autoplay: {
      delay: 8000,
      disableOnInteraction: false,
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
  },
});
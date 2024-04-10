window.addEventListener('DOMContentLoaded', function () {
    const creatorSliders = document.querySelectorAll('.base-slider__main')

    for (let index = 0; index < creatorSliders.length; index++) {
        const slider = creatorSliders[index]


        if (slider.classList.contains('base-slider__main_niches')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 8,
                slidesPerView: 1,

                navigation: {
                    nextEl: slider.closest('.base-slider').querySelector('.base-slider__button_next'),
                    prevEl: slider.closest('.base-slider').querySelector('.base-slider__button_prev'),
                },
                breakpoints: {
                    767.98: {
                        slidesPerView: 2,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.base-slider').classList.add('init')
                    },

                },
            })
        } else if (slider.classList.contains('base-slider__main_creators')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 8,
                slidesPerView: 3,

                navigation: {
                    nextEl: slider.closest('.base-slider').querySelector('.base-slider__button_next'),
                    prevEl: slider.closest('.base-slider').querySelector('.base-slider__button_prev'),
                },
                breakpoints: {
                    767.98: {
                        slidesPerView: 5,
                    },
                    567.98: {
                        slidesPerView: 4,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.base-slider').classList.add('init')
                    },

                },
            })
        }
    }
        // }  else if (slider.classList.contains('block-tags__slider_tags'))
})
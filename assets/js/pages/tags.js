window.addEventListener('DOMContentLoaded', function () {
    const creatorSliders = document.querySelectorAll('.block-tags__slider')

    for (let index = 0; index < creatorSliders.length; index++) {
        const slider = creatorSliders[index]


        if (slider.classList.contains('block-tags__slider_niches')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 16,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.closest('.block-tags').querySelector('.block-tags__button_next'),
                    prevEl: slider.closest('.block-tags').querySelector('.block-tags__button_prev'),
                },
                breakpoints: {
                    1080.98: {
                        slidesPerView: 3,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.block-tags').classList.add('init')
                    },

                },
            })
        }  else if (slider.classList.contains('block-tags__slider_tags')) {
            const swiperSlider = new Swiper(slider, {
                speed: 600,
                spaceBetween: 4,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.closest('.block-tags').querySelector('.block-tags__button_next'),
                    prevEl: slider.closest('.block-tags').querySelector('.block-tags__button_prev'),
                },
                on: {
                    afterInit() {
                        slider.closest('.block-tags').classList.add('init')
                    },

                },
            })
        } else if (slider.classList.contains('block-tags__slider_creators')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 16,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.closest('.block-tags').querySelector('.block-tags__button_next'),
                    prevEl: slider.closest('.block-tags').querySelector('.block-tags__button_prev'),
                },
                breakpoints: {
                    1080.98: {
                        slidesPerView: 8,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.block-tags').classList.add('init')
                    },

                },
            })
        } else if (slider.classList.contains('block-tags__slider_images')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 16,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.closest('.block-tags').querySelector('.block-tags__button_next'),
                    prevEl: slider.closest('.block-tags').querySelector('.block-tags__button_prev'),
                },
                breakpoints: {
                    1080.98: {
                        slidesPerView: 8,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.block-tags').classList.add('init')
                    },

                },
            })
        } else if (slider.classList.contains('block-tags__slider_videos')) {
            const swiperSlider = new Swiper(slider, {
                speed: 800,
                spaceBetween: 16,
                slidesPerView: 'auto',
                navigation: {
                    nextEl: slider.closest('.block-tags').querySelector('.block-tags__button_next'),
                    prevEl: slider.closest('.block-tags').querySelector('.block-tags__button_prev'),
                },
                breakpoints: {
                    1080.98: {
                        slidesPerView: 5,
                    }
                },
                on: {
                    afterInit() {
                        slider.closest('.block-tags').classList.add('init')
                    },

                },
            })
        }
    }
})

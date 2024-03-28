const delay = 400

window.addEventListener('DOMContentLoaded', function() {

    // Меню

    const menu = document.querySelector('.header__menu')
    const header = document.querySelector('.header')
    let lock = false
    const burger = document.querySelector('.header__burger')

    burger.addEventListener('click', function() {

        if (lock) return

        lock = true

        toggleMenu()

        setTimeout(() => {
            lock = false
        }, delay)
    })

    function toggleMenu() {
        burger.classList.toggle('active')
        menu.classList.toggle('active')
        header.classList.toggle('active')
        lockBody()
    }




    const searchHeaderInput = document.querySelector('.search-header__input input')
    const emptySearchBlock = document.querySelector('.search-header__empty')
    const contentSearchBlock = document.querySelector('.search-header__content')
    const clearSearchHeader = document.querySelector('.search-header__clear')
    const buttonSearchHeader = document.querySelector('.search-header__button')
    const cancelSearchHeader = document.querySelector('.search-header__cancel')
    const searchHeader = document.querySelector('.header__search')

    menu.addEventListener('click', function(e) {
        if (!e.target.closest('.menu__body')) {
            toggleMenu()
        }
    })
    searchHeaderInput.addEventListener('focus', function(e) {
        if (menu.classList.contains('active')) {
            toggleMenu()
        }
        searchHeader.classList.add('active')
        lockBody()
    })

    clearSearchHeader.addEventListener('click', function() {
        searchHeaderInput.value = ''
        searchHeaderInput.focus()
        checkSearchInputValue()
    })


    searchHeaderInput.addEventListener('input', checkSearchInputValue)

    buttonSearchHeader.addEventListener('click', function() {
        searchHeaderInput.focus()
    })

    cancelSearchHeader.addEventListener('click', function() {
        searchHeader.classList.remove('active')
        lockBody()
    })

    function checkSearchInputValue() {
        if (searchHeaderInput.value.length === 0 && emptySearchBlock.classList.contains('hidden')) {
            emptySearchBlock.classList.remove('hidden')
            contentSearchBlock.classList.remove('show')
        }

        if (searchHeaderInput.value.length !== 0 && !emptySearchBlock.classList.contains('hidden')) {
            emptySearchBlock.classList.add('hidden')
            contentSearchBlock.classList.add('show')
        }
    }

    window.addEventListener('click', function(e) {
        if (e.target.closest('.info-video__more')) {
            e.target.closest('.info-video__text').classList.add('full')
        }
        if (e.target.closest('.info-video__less')) {
            e.target.closest('.info-video__text').classList.remove('full')
        }
        if (e.target.closest('.tag__more')) {
            e.target.closest('.tags').classList.toggle('full')
        }
    })



    const feed = document.querySelector('.feed')

    if (feed) {
        feed.addEventListener('mousemove', debounce(playVideo, 20))

        let lockActiveVideo = false
        let activeVideo = null
        function playVideo(e) {
            if (lockActiveVideo) return
            if (e.target.closest('.item-video') && !e.target.closest('.item-video').classList.contains('active')) {

                const video = e.target.closest('.item-video').querySelector('video')
                e.target.closest('.item-video').classList.add('active')
                if (!video) return

                const player = videojs(video.id);
                activeVideo = video
                player.play()
                lockActiveVideo = true



                e.target.closest('.item-video').addEventListener('mouseleave', function(e) {
                    resetActiveVideo()
                    // player.hasStarted(false);
                    // player.pause();
                    // player.currentTime(0);
                    // e.target.closest('.item-video').classList.remove('active')
                    setTimeout(function() {
                        lockActiveVideo = false
                    }, 70)
                }, {once: true})
            }
        }

        function resetActiveVideo() {
            if (activeVideo) {
                const player = videojs(activeVideo.id);
                player.hasStarted(false);
                player.pause();
                player.currentTime(0);
                activeVideo.closest('.item-video').classList.remove('active')
                activeVideo = null
            }
        }
        feed.addEventListener('touchstart', function(e) {


            function detectOffset(e) {
            // || e.target.closest('.item-video').classList.contains('active')
                if (!e.target.closest('.item-video')) return

                const video = e.target.closest('.item-video').querySelector('video')
                const player = videojs(video.id);

                if (e.target.closest('.item-video').classList.contains('active')) {

                    resetActiveVideo()
                    return
                    // player.hasStarted(false);
                    // player.pause();
                    // player.currentTime(0);
                    // e.target.closest('.item-video').classList.remove('active')
                }
                e.preventDefault()

                resetActiveVideo()
                e.target.closest('.item-video').classList.add('active')
                activeVideo = e.target.closest('.item-video').querySelector('video')
                player.play()
            }
            e.currentTarget.addEventListener('touchmove', debounce(detectOffset, 50), {once: true})
        })
        // window.addEventListener('click', function(e) {
        //     if (document.querySelector('.item-video.active') && !e.target.closest('.item-video.active')) {
        //         resetActiveVideo()
        //         // const video = document.querySelector('.item-video.active video')
        //         // const player = videojs(video.id);
        //         //
        //         // player.hasStarted(false);
        //         // player.pause();
        //         // player.currentTime(0);
        //
        //         // video.closest('.item-video.active').classList.remove('active')
        //     }
        // })

        const gridButton = document.querySelector('.view-feed__item_grid')
        const listButton = document.querySelector('.view-feed__item_list')

        if (gridButton) {
            gridButton.addEventListener('click', function(e) {
                const items = document.querySelectorAll('.feed__items')

                if (items.length > 0) {
                    for (let index = 0; index < items.length; index++) {
                        const item = items[index]
                        if (item.classList.contains('list')) {
                            item.classList.remove('list')
                        }
                    }
                    listButton.classList.remove('active')
                    gridButton.classList.add('active')
                }


            })
        }

        if (listButton) {
            listButton.addEventListener('click', function(e) {
                const items = document.querySelectorAll('.feed__items')

                if (items.length > 0) {
                    for (let index = 0; index < items.length; index++) {
                        const item = items[index]
                        if (!item.classList.contains('list')) {
                            item.classList.add('list')
                        }
                    }
                    listButton.classList.add('active')
                    gridButton.classList.remove('active')
                }




            })
        }

    }

})

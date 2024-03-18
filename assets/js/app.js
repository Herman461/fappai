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


    function lockBody() {
        const scrollWidth = window.innerWidth - document.body.clientWidth

        document.body.style.paddingRight = scrollWidth + 'px'

        document.body.classList.toggle('lock')

        const elements = document.querySelectorAll('.lock-body')

        if (elements.length > 0) {
            for (let index = 0; index < elements.length; index++) {
                const element = elements[index]
                element.style.paddingRight = scrollWidth + 'px'
            }
        }

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

    //
    //
    // fixHeader()
    // function fixHeader() {
    //     if (document.body.scrollTop > 10 && !header.classList.contains('fix')) {
    //         header.classList.add('fix')
    //     }
    //     if (document.body.scrollTop <= 0 && header.classList.contains('fix')) {
    //         header.classList.remove('fix')
    //     }
    // }

    // window.addEventListener('scroll', fixHeader)

})

window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('click', function(e) {
        if (e.target.closest('.actions-item-saved__button')) {
            e.target.closest('.actions-item-saved').classList.toggle('active')
        }
        if (document.querySelector('.actions-item-saved.active') && (!e.target.closest('.actions-item-saved.active') || e.target.closest('.actions-item-saved__element'))) {
            document.querySelector('.actions-item-saved.active').classList.remove('active')
        }
    })
})

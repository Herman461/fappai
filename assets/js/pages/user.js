window.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('click', function(e) {
        if (e.target.closest('.copy-user__button')) {

            try {
                copyText(document.querySelector('.copy-user__link'))

                setSuccessAlert('Success copied!')
            } catch (e) {
                setErrorAlert('Fail copied!')
            }
        }

        if (e.target.closest('.main-user__photo')) {
            e.target.closest('.main-user__photo').classList.add('active')
        }

        if (
            document.querySelector('.main-user__photo').classList.contains('active')
            && (e.target.closest('.photo-main-user__close') || !e.target.closest('.main-user__photo'))

        ) {
            document.querySelector('.main-user__photo').classList.remove('active')

        }

        if (e.target.closest('.main-user__more')) {
            e.target.closest('.main-user__desc').classList.add('full')

        }
        if (e.target.closest('.main-user__less')) {
            e.target.closest('.main-user__desc').classList.remove('full')
        }

    })
})

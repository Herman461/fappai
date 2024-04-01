window.addEventListener('DOMContentLoaded', function () {
    const inputElements = document.querySelectorAll('.input')

    const password = document.querySelector('[data-input-password]')
    const confirmedPassword = document.querySelector('[data-input-confirmed-password]')

    const button = document.querySelector('.bottom-edit__save')
    let errors = []

    function checkIfButtonIsDisabled() {
        const hasValidInputs = document.querySelectorAll('.content-edit__input .input.has-no-error').length > 0

        if (password && password.classList.contains('has-no-error') && password.value !== confirmedPassword.value) {
            button.setAttribute('disabled', '')
            return
        }

        if (hasValidInputs && !document.querySelector('.content-edit .errors-list')) {
            button.removeAttribute('disabled')
        } else {
            button.setAttribute('disabled', '')
        }
    }
    function setErrorList() {
        if (document.querySelector('.content-edit .errors-list')) {
            document.querySelector('.content-edit .errors-list').remove()
        }

        if (errors.length > 0) {

            const photoWrapperElement = document.querySelector('.content-edit .content-edit__photo')
            const errorsList = document.createElement('ul')
            errorsList.className = 'errors-list list'

            for (let index = 0; index < errors.length; index++) {
                const error = errors[index]
                const item = document.createElement('li')
                item.textContent = error.text
                errorsList.appendChild(item)
            }
            photoWrapperElement.appendChild(errorsList)
        }
        checkIfButtonIsDisabled()
    }

    if (inputElements.length > 0) {
        for (let index = 0; index < inputElements.length; index++) {
            const element = inputElements[index]

            // if (element.hasAttribute('data-input')) continue
            element.addEventListener('change', function(e) {

                const input = e.currentTarget

                if (input.dataset.inputMin) {
                    const hasError = !!errors.find(error => error.id === input.id)

                    if ((Number(input.dataset.inputMin) <= input.value.length) && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        input.classList.remove('has-error')
                        input.classList.add('has-no-error')
                        setErrorList()
                    }

                    if (Number(input.dataset.inputMin) > input.value.length) {
                        input.classList.add('has-error')
                        input.classList.remove('has-no-error')

                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'The field ' + field + ' requires at least ' + input.dataset.inputMin + ' characters',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }

                }

                if (input.dataset.inputMax) {
                    const hasError = !!errors.find(error => error.id === input.id)

                    if ((Number(input.dataset.inputMax) >= input.value.length) && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        input.classList.remove('has-error')
                        input.classList.add('has-no-error')
                        setErrorList()
                    }

                    if (Number(input.dataset.inputMax) < input.value.length) {
                        input.classList.add('has-error')
                        input.classList.remove('has-no-error')
                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'The field ' + field + ' can have no more than ' + input.dataset.inputMax + ' characters',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }

                }



                if (input.hasAttribute('data-input-url')) {
                    const urlPattern = new RegExp('^(https?:\\/\\/)?'+
                        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
                        '((\\d{1,3}\\.){3}\\d{1,3}))'+
                        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
                        '(\\?[;&a-z\\d%_.~+=-]*)?'+
                        '(\\#[-a-z\\d_]*)?$','i')

                    const isValidUrl = !!urlPattern.test(input.value);


                    const hasError = !!errors.find(error => error.id === input.id)

                    if (isValidUrl && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        input.classList.remove('has-error')
                        input.classList.add('has-no-error')
                        setErrorList()
                    }

                    if (!isValidUrl) {
                        input.classList.add('has-error')
                        input.classList.remove('has-no-error')

                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'The field ' + field + ' is not correct',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }
                }

                if (input.hasAttribute('data-input-password')) {
                    const confirmedInput = document.querySelector('#retry_password')

                    if (confirmedInput.value.length === 0 ) return

                    const isConfirmedPassword = input.value === confirmedInput.value


                    const hasError = !!errors.find(error => error.id === confirmedInput.id)

                    if (isConfirmedPassword && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        confirmedInput.classList.remove('has-error')
                        confirmedInput.classList.add('has-no-error')

                        setErrorList()
                    }

                    if (!isConfirmedPassword) {
                        confirmedInput.classList.add('has-error')
                        confirmedInput.classList.remove('has-no-error')
                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'The password is not confirmed',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }

                }


                if (input.hasAttribute('data-input-confirmed-password')) {
                    const isConfirmedPassword = input.value === document.querySelector('#new_password').value


                    const hasError = !!errors.find(error => error.id === input.id)

                    if (isConfirmedPassword && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        input.classList.remove('has-error')
                        input.classList.add('has-no-error')

                        setErrorList()
                    }

                    if (!isConfirmedPassword) {
                        input.classList.add('has-error')
                        input.classList.remove('has-no-error')
                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'The password is not confirmed',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }
                }
                //

                if (input.hasAttribute('data-input-email')) {
                    const format = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-._0-9]+?\.[a-zA-Z\-._0-9]+[a-zA-Z\-._0-9]+/g;
                    const secondFormat = /^[A-Z0-9a-z\-]{3,256}\.[a-zA-Z\-]{2,256}/g;

                    const isValidEmail = format.test(input.value) || secondFormat.test(input.value)

                    const hasError = !!errors.find(error => error.id === input.id)

                    if (isValidEmail && hasError) {
                        errors = errors.filter(error => error.id !== input.id)

                        input.classList.remove('has-error')
                        input.classList.add('has-no-error')

                        setErrorList()
                    }

                    if (!isValidEmail) {
                        input.classList.add('has-error')
                        input.classList.remove('has-no-error')
                        if (hasError) return

                        const field = input.dataset.inputField ? input.dataset.inputField : input.id

                        errors.push({
                            text: 'Email is not valid',
                            id: input.id
                        })

                        setErrorList()
                        return
                    }
                }

                const format = /^[a-zA-Z\-._0-9]+@[a-zA-Z\-._0-9]+?\.[a-zA-Z\-._0-9]+[a-zA-Z\-._0-9]+/g;

                const secondFormat = /^[A-Z0-9a-z\-]{3,256}\.[a-zA-Z\-]{2,256}/g;



                if (input.hasAttribute('data-input-email')) {
                    input.value = input.value.replace(/[^a-zA-Z0-9!.#?\-._@ ]/g, '');
                    if (!format.test(input.value) && !secondFormat.test(input.value)) {
                        const errorMessageText = 'Email is not correct'

                        const error = document.createElement('span')
                        error.className = 'error'
                        error.textContent = errorMessageText

                        input.parentElement.appendChild(error)
                        input.classList.add('has-error')

                        return
                    }


                }
                input.classList.add('has-no-error')
                checkIfButtonIsDisabled()





            }, true)

            element.addEventListener('focus', function(e) {
                const input = e.currentTarget

                if (input.classList.contains('has-error')) {
                    input.classList.remove('has-error')

                    // const error = input.parentElement.querySelector('.error')
                    // error.remove()
                    //
                    // if (e.target.closest('.password')) {
                    //     e.target.closest('.password').classList.remove('has-error')
                    // }
                }
            })
        }

    }


    // Аватар пользователя

    const uploadButton = document.querySelector('.photo-edit__action')

    const avatarWrapper = document.querySelector('.photo-edit__item')

    // const emptyAvatar = document.querySelector('.avatar__empty')
    //
    // emptyAvatar.addEventListener('click', function (e) {
    //     const input = e.currentTarget.previousElementSibling
    //
    //     input.click()
    // })
    const avatarInput = document.querySelector('.photo-edit__action input')

    uploadButton.addEventListener('click', function() {
        avatarInput.click()
    })


    avatarInput.addEventListener('change', function (e) {
        const avatar = e.currentTarget.files[0]

        const avatarBody = avatarInput.closest('.avatar')

        // if (avatar.size < 204800)
        if (avatar.size < 204800) {
            const errorMessageText = 'The image size cannot be less than 200 kb.'



            setErrorAlert('The image size cannot be less than 200 kb.')
            return
        }

        if (avatar.size > 52428800) {


            setErrorAlert('The image size cannot be more than 50 mb.')
            return
        }

        const reader = new FileReader();
        reader.readAsDataURL(avatar);


        reader.onloadend = function () {


            const img = document.createElement('img')

            img.alt = 'User Photo'
            img.src = reader.result

            avatarWrapper.innerHTML = ''
            avatarWrapper.appendChild(img)


            if (button.hasAttribute('disabled')) {
                button.removeAttribute('disabled')
            }

        }


    })



})


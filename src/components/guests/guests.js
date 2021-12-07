$('.js-guest__sign').on('click', function () {
    const countGuests = (_this) => {
        let sign = $(_this).attr('sign')
        let input = $(_this).parent().find('.js-guest__number')
        let value = +input.attr('value')
        if (sign === 'plus') {
            let newValue = value + 1
            input.attr({'value': newValue})
        } else {
            let newValue = value > 0 ? (value - 1) : 0
            input.attr({'value': newValue})
        }
    }
    const showButton = (button) => {
        button.removeClass('button_hidden')
    }
    const hideButton = (button) => {
        button.addClass('button_hidden')
    }
    // const clearValues = (elements) => {
    //     elements.forEach(el => {
    //         el.attr({'value': 0})
    //     })
    // }
    // const setPlaceholder = (bar, value) => {
    //     bar.attr({'placeholder': value})
    // }
    // const setAddPlaceholder = (bar, additionValue) => {
    //     bar.attr({'placeholder': `${bar.attr('placeholder')}, ${additionValue}`})
    // }
    // const declineWord = (word, value) => {
    //     if ((value < 10 || value > 20) &&
    //         (value % 10 === 1 && value % 100 !== 11)) {
    //             switch (word) {
    //                 case ('Гость') :
    //                     return 'гость'
    //                 case ('Младенец') :
    //                     return 'младенец'
    //             }
    //         }
    //     if ((value % 10 === 2 || value % 10 === 3 || value % 10 === 4) &&
    //             (value % 100 !== 12 && value % 100 !== 13 && value % 100 !== 14)) {
    //                 switch (word) {
    //                     case ('Гость') :
    //                         return 'гостя'
    //                     case ('Младенец') :
    //                         return 'младенца'
    //                 }
    //             }
    //     switch (word) {
    //         case ('Гость') :
    //             return 'гостей'
    //         case ('Младенец') :
    //             return 'младенцев'
    //     }
    // }
    // const closeDropdown = (bar, dropDown) => {
    //     bar.removeClass('js-guest_expand')
    //     dropDown.addClass('js-guest__dropdown_hidden')
    // }

    countGuests(this)

    // let adults = $(this).closest('.js-guest').find('.js-counter__adults')
    // let children = $(this).closest('.js-guest').find('.js-counter__children')
    // let infants = $(this).closest('.js-guest').find('.js-counter__infants')

    // let sumGuests = +adults.attr('value') + +children.attr('value')
    // let sumInfants = +infants.attr('value')

    // let bar = $(this).closest('.js-guest').find('.js-guest_expand')
    // let barGuest = bar.find('.js-guest__input')
    // let dropGuest = $(this).closest('.js-guest-dropdown')

    // let clearBtn = dropGuest.find('.js-clear-button')
    // let submitBtn = dropGuest.find('.js-submit-button')

    // if (sumGuests) {
    //     showButton(clearBtn)
    //     clearBtn.on('click', () => {
    //         sumGuests = 0
    //         clearValues([adults, children, infants])
    //         hideButton(clearBtn)
    //         setPlaceholder(barGuest, "Сколько гостей")
    //     })
    //     setPlaceholder(barGuest, `${sumGuests} ${declineWord('Гость', sumGuests)}`)
    //     if (sumInfants) {
    //         setAddPlaceholder(barGuest, `${sumInfants} ${declineWord('Младенец', sumInfants)}`)
    //     }

    //     submitBtn.on('click', () => {
    //         closeDropdown(bar, dropGuest)
    //     })

    // } else {
    //     hideButton(clearBtn)
    //     clearValues([infants])
    //     setPlaceholder(barGuest, "Сколько гостей")
    // }
})
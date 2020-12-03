import $ from 'jquery'
$('.guests-counter__btn').on('click', function () {
    const countGuests = (_this) => {
        let direction = $(_this).attr('data-direction')
        let input = $(_this).parent().find('.counter__value')
        let value = +input.attr('value')
        if (direction === 'plus') {
            let newValue = value + 1
            input.attr({'value': newValue})
        } else {
            let newValue = value > 0 ? (value - 1) : 0
            input.attr({'value': newValue})
        }
    }
    const showButton = (button) => {
        button.removeClass('button-hidden')
        button.addClass('button-pointer')
    }
    const hideButton = (button) => {
        button.addClass('button-hidden')
        button.removeClass('button-pointer')
    }
    const clearValues = (elements) => {
        elements.forEach(el => {
            el.attr({'value': 0})
        })
    }
    const setPlaceholder = (bar, value) => {
        bar.attr({'placeholder': value})
    }
    const setAddPlaceholder = (bar, additionValue) => {
        bar.attr({'placeholder': `${bar.attr('placeholder')}, ${additionValue}`})
    }
    const declineWord = (word, value) => {
        if ((value < 10 || value > 20) &&
            (value % 10 === 1 && value % 100 !== 11)) {
                switch (word) {
                    case ('Гость') :
                        return 'гость'
                    case ('Младенец') :
                        return 'младенец'
                }
            }
        if ((value % 10 === 2 || value % 10 === 3 || value % 10 === 4) &&
                (value % 100 !== 12 && value % 100 !== 13 && value % 100 !== 14)) {
                    switch (word) {
                        case ('Гость') :
                            return 'гостя'
                        case ('Младенец') :
                            return 'младенца'
                    }
                }
        switch (word) {
            case ('Гость') :
                return 'гостей'
            case ('Младенец') :
                return 'младенцев'
        }
    }
    const closeDropdown = (bar, dropDown) => {
        bar.removeClass('border-focus')
        dropDown.addClass('hidden')
    }

    countGuests(this)

    let adults = $('#adults')
    let children = $('#children')
    let infants = $('#infants')

    let sumGuests = +adults.attr('value') + +children.attr('value')
    let sumInfants = +infants.attr('value')

    let bar = $(this).closest('.text-field').find('.text-field__dropdown-default')
    let barGuest = bar.find('.dropdown-form__input')
    let dropGuest = $(this).closest('.common-dropdown')

    let clearBtn = dropGuest.find('.common-dropdown__clear')
    let submitBtn = dropGuest.find('.common-dropdown__submit')

    if (sumGuests) {
        showButton(clearBtn)
        clearBtn.on('click', () => {
            sumGuests = 0
            clearValues([adults, children, infants])
            hideButton(clearBtn)
            setPlaceholder(barGuest, "Сколько гостей")
        })
        setPlaceholder(barGuest, `${sumGuests} ${declineWord('Гость', sumGuests)}`)
        if (sumInfants) {
            setAddPlaceholder(barGuest, `${sumInfants} ${declineWord('Младенец', sumInfants)}`)
        }

        submitBtn.on('click', () => {
            closeDropdown(bar, dropGuest)
        })

    } else {
        hideButton(clearBtn)
        clearValues([infants])
        setPlaceholder(barGuest, "Сколько гостей")
    }
})




// const btns = document.querySelectorAll('.guests-counter__btn');
//
// const adult = document.querySelector('#adults');
// const children = document.querySelector('#children');
// const infants = document.querySelector('#infants');
//
// /* I added so many parentElement 's because there are several guest dropdowns on
// the page and I didn't want to define id everytime the block is needed.
// It's only for UI kit */
//
//
// btns.forEach(btn=> {
//     btn.addEventListener('click',
//         function() {
//             /* the value between buttons */
//             const direction = this.dataset.direction;
//             const inp = this.parentElement.querySelector('.counter__value');
//             const currentValue = +inp.value;
//
//             if (direction === 'plus') {
//                 inp.value = currentValue + 1;
//             } else {
//                 inp.value = currentValue > 0 ? currentValue - 1 : 0
//             }
//
//             /*guests number variables*/
//             let sumGuests;
//             sumGuests = +adult.value + +children.value;
//             let sumInfants;
//             sumInfants = +infants.value;
//
//             /*buttons variables*/
//             const clearBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown__clear');
//             const submitBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown__submit');
//
//             /*dropdown variable*/
//             const dropGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown');
//
//             /*bar variables*/
//             const barGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__input');
//             const bar = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.text-field__dropdown-default');
//
//
//
//
//             if (sumGuests > 0) {
//                 clearBtn.classList.remove('button-hidden');
//                 clearBtn.classList.add('button-pointer');
//                 clearBtn.onclick = function() {
//                     sumGuests = 0;
//                     adult.value = 0;
//                     children.value = 0;
//                     infants.value = 0;
//                     clearBtn.classList.add('button-hidden');
//                     clearBtn.classList.remove('button-pointer');
//
//                     barGuest.placeholder = "Сколько гостей"
//                 };
//                 if (sumGuests < 10 || sumGuests > 20) {
//                     if (sumGuests % 10 === 1 && sumGuests % 100 !== 11) {
//                         barGuest.placeholder = +sumGuests + " гость";
//                     } else {
//                         if (sumGuests % 10 === 2 || sumGuests % 10 === 3 || sumGuests % 10 === 4) {
//                             if (sumGuests % 100 !== 12 && sumGuests % 100 !== 13 && sumGuests % 100 !== 14){
//                                 barGuest.placeholder = +sumGuests + " гостя";
//                             }
//                             else {
//                                 barGuest.placeholder = +sumGuests + " гостей";
//                             };
//                         }
//                         else {
//                             barGuest.placeholder = +sumGuests + " гостей";
//                         };
//                     };
//                 } else {
//                     barGuest.placeholder = +sumGuests + " гостей";
//                 };
//
//                 if (infants.value > 0) {
//                     if (infants.value < 10 || infants.value > 20) {
//                         if (infants.value % 10 === 1 && infants.value % 100 !== 11) {
//                             barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенец";
//                         } else {
//                             if (infants.value % 10 === 2 || infants.value % 10 === 3 || infants.value % 10 === 4) {
//                                 if (infants.value % 100 !== 12 && infants.value % 100 !== 13 && infants.value % 100 !== 14) {
//                                     barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенца";
//                                 }
//                                 else {
//                                     barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
//                                 };
//                             }
//                             else {
//                                 barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
//                             };
//                         };
//                     } else {
//                         barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
//                     };
//                 }
//                 submitBtn.onclick = function() {
//                     dropGuest.classList.add('hidden');
//                     bar.classList.remove('border-focus');
//                     /*also the form should be sent*/
//                 };
//
//             } else {
//                 infants.value = 0;
//                 barGuest.placeholder = "Сколько гостей";
//                 clearBtn.classList.remove('button-appearance');
//             };
//
//     });
//
// });






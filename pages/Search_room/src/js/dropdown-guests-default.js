const btns = document.querySelectorAll('.guests-counter__btn');

const adult = document.querySelector('#adults');
const children = document.querySelector('#children');
const infants = document.querySelector('#infants');

/* I added so many parentElement 's because there are several guest dropdowns on 
the page and I didn't want to define id everytime the block is needed. 
It's only for UI kit */

btns.forEach(btn=> {
    btn.addEventListener('click',
        function() {
            /* the value between buttons */
            const direction = this.dataset.direction;
            const inp = this.parentElement.querySelector('.counter__value');
            const currentValue = +inp.value;
            
            if (direction === 'plus') {
                inp.value = currentValue + 1;
            } else {
                inp.value = currentValue > 0 ? currentValue - 1 : 0
            }
            
            /*guests number variables*/
            let sumGuests;
            sumGuests = +adult.value + +children.value;
            let sumInfants;
            sumInfants = +infants.value;
            
            /*buttons variables*/
            const clearBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown__clear');
            const submitBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown__submit');
            
            /*dropdown variable*/
            const dropGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown');
            
            /*bar variables*/
            const barGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__input');
            console.log(barGuest.placeholder);
            const bar = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.text-field__dropdown-default');
            console.log(bar);


            

            if (sumGuests > 0) {
                clearBtn.classList.remove('button-hidden');
                clearBtn.classList.add('button-pointer');
                clearBtn.onclick = function() {
                    sumGuests = 0;
                    adult.value = 0;
                    children.value = 0;
                    infants.value = 0;
                    clearBtn.classList.add('button-hidden');
                    clearBtn.classList.remove('button-pointer');
                    
                    barGuest.placeholder = "Сколько гостей"
                };
                if (sumGuests < 10 || sumGuests > 20) {
                    if (sumGuests % 10 === 1 && sumGuests % 100 !== 11) {
                        barGuest.placeholder = +sumGuests + " гость";
                    } else {
                        if (sumGuests % 10 === 2 || sumGuests % 10 === 3 || sumGuests % 10 === 4) {
                            if (sumGuests % 100 !== 12 && sumGuests % 100 !== 13 && sumGuests % 100 !== 14){
                                barGuest.placeholder = +sumGuests + " гостя";
                            }
                            else {
                                barGuest.placeholder = +sumGuests + " гостей";
                            };
                        }
                        else {
                            barGuest.placeholder = +sumGuests + " гостей";
                        };
                    };
                } else { 
                    barGuest.placeholder = +sumGuests + " гостей"; 
                };
                
                if (infants.value > 0) {
                    if (infants.value < 10 || infants.value > 20) {
                        if (infants.value % 10 === 1 && infants.value % 100 !== 11) {
                            barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенец";
                        } else {
                            if (infants.value % 10 === 2 || infants.value % 10 === 3 || infants.value % 10 === 4) {
                                if (infants.value % 100 !== 12 && infants.value % 100 !== 13 && infants.value % 100 !== 14) {
                                    barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенца";
                                }
                                else {
                                    barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
                                };
                            }
                            else {
                                barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
                            };
                        };
                    } else { 
                        barGuest.placeholder = barGuest.placeholder + ", " + infants.value + "  младенцев";
                    };
                }
                submitBtn.onclick = function() {
                    dropGuest.classList.add('hidden');
                    bar.classList.remove('border-focus');
                    /*also the form should be sent*/
                };

            } else {
                infants.value = 0;
                barGuest.placeholder = "Сколько гостей";
                clearBtn.classList.remove('button-appearance');
            };
            
    });
    
});






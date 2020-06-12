const btns = document.querySelectorAll('.counter__btn');

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
            const clearBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.guests__clear');
            const submitBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.guests__submit');
            
            /*dropdown variable*/
            const dropGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.guests__dropdown');
            
            /*bar variables*/
            const barGuest = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__input');
            const openBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__arrow');
            const bar = document.querySelector('.guests__field');

            openBtn.onclick = function() {
                dropGuest.classList.remove('hidden');
                bar.classList.remove('border');
            };

            if (sumGuests > 0) {
                barGuest.placeholder = +sumGuests + " Гостей";
                clearBtn.classList.add('button-appearance');
                clearBtn.onclick = function() {
                    sumGuests = 0;
                    adult.value = 0;
                    children.value = 0;
                    infants.value = 0;
                    clearBtn.classList.remove('button-appearance');
                    console.log(sumGuests);
                    barGuest.placeholder = "Сколько гостей"
                };
                if (infants.value > 0) {
                    barGuest.placeholder = barGuest.placeholder + ", " + infants.value + " младенцев";
                }
                submitBtn.onclick = function() {
                    dropGuest.classList.add('hidden');
                    bar.classList.add('border');
                    /*also the form should be sent*/
                };

            } else {
                infants.value = 0;
            };
            
            
    });
    
});






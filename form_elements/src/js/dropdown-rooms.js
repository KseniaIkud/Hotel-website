const btns = document.querySelectorAll('.rooms-counter__btn');

const bedrooms = document.querySelector('#bedrooms');
const beds = document.querySelector('#beds');
const bathrooms = document.querySelector('#bathrooms');

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
        let sumBedrooms;
        sumBedrooms = +bedrooms.value
        let sumBeds;
        sumBeds = +beds.value;
        let sumBathrooms;
        sumBathrooms = +bathrooms.value;
        let allSum;
        allSum = sumBedrooms + sumBeds + sumBathrooms;
        
        /*dropdown variable*/
        const dropDown = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.room__dropdown');
        
        /*bar variables*/
        const barDropDown = this.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__input');
        const openBtn = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__arrow');
        const bar = document.querySelector('.room__field');
        
        openBtn.onclick = function() {
            dropDown.classList.remove('hidden');
            bar.classList.remove('border');
        };

        /*placeholder vars*/
        let bathroomsPlace

        if (sumBedrooms === 0) {
            sumBedrooms = 1;
            bedrooms.value = 1;
        };
        if (sumBeds === 0) {
            sumBeds = 1;
            beds.value = 1;
        };
        if (sumBathrooms > 0) {
            bathroomsPlace  = ", " + sumBathrooms + " ванн "
        } else {bathroomsPlace = ''};

        barDropDown.placeholder = sumBedrooms + " спален, " + +sumBeds + " кроватей" + bathroomsPlace;
    });    
});
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
        const barDropDown = this.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector('.dropdown-form__input');

        /*placeholder vars*/
        let bedroomsPlace
        let bedsPlace
        let bathroomsPlace

        if (sumBedrooms === 0) {
            sumBedrooms = 1;
            bedrooms.value = 1;
            bedroomsPlace = 1 + " спальня";
        } else {
            if (sumBedrooms % 10 === 1 && sumBedrooms % 100 !== 11) {
                bedroomsPlace = sumBedrooms + " спальня";
            } else {
                if (sumBedrooms % 10 === 2 || sumBedrooms % 10 === 3 || sumBedrooms % 10 === 4) {
                    if (sumBedrooms % 100 !== 12 && sumBedrooms % 100 !== 13 &&sumBedrooms % 100 !== 14) {
                        bedroomsPlace = sumBedrooms + " спальни";
                    } else {
                        bedroomsPlace = sumBedrooms + " спален";
                    };
                } else {
                    bedroomsPlace = sumBedrooms + " спален";
                };
                
            };
        };
        if (sumBeds === 0) {
            sumBeds = 1;
            beds.value = 1;
            bedsPlace = 1 + " кровать";
        } else {
            if (sumBeds % 10 === 1 && sumBeds % 100 !== 11 ) {
                bedsPlace = sumBeds + " кровать";
            } else {
                if (sumBeds % 10 === 2 || sumBeds % 10 === 3 || sumBeds % 10 === 4) {
                    if (sumBeds % 100 !== 12 && sumBeds % 100 !== 13 && sumBeds % 100 !== 14) {
                        bedsPlace = sumBeds + " кровати";
                    }
                    else {
                        bedsPlace = sumBeds + " кроватей";
                    }
                } else {
                    bedsPlace = sumBeds + " кроватей";
                }
            }
        };
        if (sumBathrooms > 0) {
            if (sumBathrooms % 10 === 1 && sumBathrooms % 100 != 11) {
                bathroomsPlace = ", " + sumBathrooms + " ванная";
            } else {
                if (sumBathrooms % 10 === 2 || sumBathrooms % 10 === 3 || sumBathrooms % 10 === 4) {
                    if (sumBathrooms % 100 !== 12 && sumBathrooms % 100 !== 13 && sumBathrooms % 100 !== 14) {
                        bathroomsPlace  = ", " + sumBathrooms + " ванные";
                    } else {
                        bathroomsPlace = ", " + sumBathrooms + " ванных";
                    };
                } else {
                    bathroomsPlace = ", " + sumBathrooms + " ванных";
                };
            };
        } else {bathroomsPlace = '...'};
        barDropDown.placeholder = bedroomsPlace + ", " + bedsPlace + bathroomsPlace;
    });    
});
//open and close dropdown

const dropDowns = document.querySelectorAll('.dropdown-form__arrow');
dropDowns.forEach(dropDown=> {
    dropDown.addEventListener('click',
        function() {
            const field = this.parentElement.parentElement.parentElement.parentElement.querySelector('.common-dropdown');
            const bar = this.parentElement.parentElement.parentElement.parentElement.querySelector('.text-field__dropdown-default');
            field.classList.toggle('hidden');
            bar.classList.toggle('border-focus');
            console.log('hi');
        }
    )
});


//open and close dropdown

const focusDropDowns = document.querySelectorAll('.text-field__dropdown-default');
focusDropDowns.forEach(focusDropDown=> {
    focusDropDown   .addEventListener('click',
        function() {
            const field = this.parentElement.querySelector('.common-dropdown');
            field.classList.toggle('hidden');
            this.classList.toggle('border-focus');
        }
    )
});
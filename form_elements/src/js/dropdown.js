//open and close dropdown

const dropDownsFocus = document.querySelectorAll('.text-field__dropdown-default');
dropDownsFocus.forEach(dropDownFocus=> {
    dropDownFocus.addEventListener('click',
        function() {
            const field = this.parentElement.querySelector('.common-dropdown');
            field.classList.toggle('hidden');
            this.classList.toggle('border-focus');
        }
    )
});
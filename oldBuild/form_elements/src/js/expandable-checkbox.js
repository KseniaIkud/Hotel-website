const arrows = document.querySelectorAll('.expansion__arrow');
arrows.forEach(arrow => {
    arrow.addEventListener('click',
    function() {
        arrow.classList.toggle('expand-less');
        const list = this.parentElement.parentElement.querySelector('.expansion__dropdown')
        list.classList.toggle('hidden');
    })
})
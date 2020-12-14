import './images/expand.svg';
$(function() {
    $('.js-guest__expand').on('click', function() {
        $(this).toggleClass('js-guest_expand')
        const dropdown = $(this).closest('.js-guest').find('.js-guest-dropdown')
        dropdown.toggleClass('js-guest_open')
    })
})


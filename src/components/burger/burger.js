$('.js-burger__sign').on('click', function() {
    $(this).toggleClass('js-burger__sign_closed')
    $(this).toggleClass('js-burger__sign_open')
    $(this).closest('.burger').find('.js-burger__content').toggleClass('js-burger_hidden')
})
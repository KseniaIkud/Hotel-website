$('.js-burger__sign').on('click', function() {
    $(this).toggleClass('burger__sign_closed')
    $(this).toggleClass('burger__sign_open')
    $(this).closest('.burger').find('.js-burger__content').toggleClass('burger__content_hidden')
})
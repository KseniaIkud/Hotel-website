import $ from './jquery-1.12.4'

$('.text-field__dropdown-default').on('click', function () {
    $(this).parent().find('.common-dropdown').removeClass('hidden')
    $(this).addClass('border-focus')
    $(document).on('click', (e) => {
        let el = '.common-dropdown'
        if ($(e.target).closest(this).length) return
        if ($(e.target).closest(el).length) return
        $(this).parent().find('.common-dropdown').addClass('hidden')
        $(this).removeClass('border-focus')
    })
})


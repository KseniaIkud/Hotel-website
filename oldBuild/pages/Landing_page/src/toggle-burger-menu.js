import $ from 'jquery'

const burgerMenu = $('.js-burger-menu')

burgerMenu.on('click', function () {
    const menuList = $(this).children('.js-header-common__list-menu')
    menuList.toggleClass('header-common__list-menu_hidden')
})

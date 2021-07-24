$('document').ready(() => {
    $('.menu_toggler, .menu_toggler + img').click(() => {
        $('.menu_items, .menu_item, .nav_container, .language_btn, .menu_toggler, .overlay').toggleClass('menu_active')
    })
    $('.project_menu > img').click(() => {
        $('.project_menu ul').toggleClass('project_active')
    })

    $('.menu_item:first-child').mouseover(() => {
        $('.projects_modal_window').css({'display': 'flex'})
        $('.overlay').fadeIn()
    })
    $('.menu_item:first-child').mouseleave(() => {
        $('.projects_modal_window').css({'display': 'none'})
        $('.overlay').fadeOut()
    })
})
$( document ).ready(function(){
    /* ACTIVATE COLLAPSIBLE NAVBAR */
    $(".button-collapse").sideNav({
        menuWidth: '80%',
        closeOnClick: true
    });

    /* TOGGLE ACTIVE NAVBAR CLASS */
    const currentUrl = window.location.pathname;
    let currentNavLi;
    switch (currentUrl) {
        case '/self':
            currentNavLi = $('#self');
            break;
        case '/love':
            currentNavLi = $('#love');
            break;
        case '/career':
            currentNavLi = $('#career');
            break;
        case '/family':
            currentNavLi = $('#family')
            break;    
        default:
            currentNavLi = $('#home');
            break;
    }
    currentNavLi.addClass('active');
});
$( document ).ready(function(){
    /* ACTIVATE COLLAPSIBLE NAVBAR */
    $(".button-collapse").sideNav({
        menuWidth: '80%',
        closeOnClick: true
    });

    /* TOGGLE ACTIVE NAVBAR CLASS */
    let currentNavLi;
    switch (window.location.pathname) {
        case '/self':
            currentNavLi = '#self';
            break;
        case '/love':
            currentNavLi = '#love';
            break;
        case '/career':
            currentNavLi = '#career';
            break;
        case '/family':
            currentNavLi = '#family';
            break;    
        default:
            currentNavLi = '#home';
            break;
    }
    $(currentNavLi).addClass('active');
    $(`${currentNavLi}-mobile`).addClass('active');
});
$( document ).ready(function(){
    /* ACTIVATE COLLAPSIBLE NAVBAR */
    $(".button-collapse").sideNav({
        menuWidth: '80%',
        closeOnClick: true
    });

    /* OTHER */
    document.getElementById('footer-year').innerHTML = `&copy; ${new Date().getFullYear()} Copyright`;
});
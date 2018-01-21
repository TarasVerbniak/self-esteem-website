$( document ).ready(function(){
    /* VARIABLES */
    const likeSVGLink = $('.svg-like');
    const articleID = likeSVGLink.attr('id') ? likeSVGLink.attr('id').slice(0, -2) : null;

    /* INITIALIZE LOCALSTORAGE */
    const initialLocalStorage = JSON.stringify({
        likes: []
    });
    if(!localStorage.getItem('sew-data')){
        localStorage.setItem('sew-data', initialLocalStorage);
    }
    const sewLocalStorage = JSON.parse( localStorage.getItem('sew-data') );

    /* ADD TOOLTIP ON BIG SCREEN SIZES */
    if ($(window).width() > 600 && sewLocalStorage.likes.indexOf(articleID) === -1) {
        likeSVGLink.addClass('tooltipped');
        likeSVGLink.tooltip();
    } else if($(window).width() > 600 && sewLocalStorage.likes.indexOf(articleID) !== -1) {
        likeSVGLink[0].setAttribute('data-tooltip', 'You liked it. Unlike?');
        likeSVGLink.addClass('tooltipped');
        likeSVGLink.tooltip();
    }

    /* ADJUST LIKES COLORS FOR LIKED/NOT-LIKED ARTICLES */
    const articlesListSVG = $('.article-list-svg');
    if(articlesListSVG){
        articlesListSVG.map((i, s) => {
            const svg = s.children[0];
            if(sewLocalStorage.likes.indexOf(svg.id) !== -1){
                svg.style.fill='#d32f2f';
            }
        });
    }

    if(articleID && sewLocalStorage.likes.indexOf(articleID) !== -1){
        likeSVGLink[0].firstElementChild.style.fill='#d32f2f'
        likeSVGLink.removeClass('svg-like-animation');
    }

    /* ACTIVATE COLLAPSIBLE NAVBAR */
    $(".button-collapse").sideNav({
        menuWidth: '80%',
        closeOnClick: true
    });

    /* SET FOOTER DATE DYNAMICALLY */
    document.getElementById('footer-year').innerHTML = `&copy; ${new Date().getFullYear()} Copyright`;

    /* INCREASE LIKE */
    likeSVGLink.click(e => {
        if(sewLocalStorage.likes.indexOf(articleID) === -1){
            sewLocalStorage.likes.push(articleID);
            localStorage.setItem('sew-data', JSON.stringify(sewLocalStorage));
            likeSVGLink[0].firstElementChild.style.fill='#d32f2f'
            likeSVGLink.removeClass('svg-like-animation');
            $(`#${articleID}-likes`).text( parseInt($(`#${articleID}-likes`).text()) + 1 );
            Materialize.toast('Thank you for reading our article!', 3000);
            if ($(window).width() > 600){
                likeSVGLink[0].setAttribute('data-tooltip', 'You liked it. Unlike?');
                likeSVGLink.tooltip();
            }
            $.ajax({
                type: 'POST',
                url: `${window.location.pathname}/like`,
                data: {
                    id: articleID,
                    like: true
                },
                success: res => {
                    if(!res.success) console.log('ERROR on the server. Can\'t like now');
                }
            });
        } else {
            sewLocalStorage.likes.splice( sewLocalStorage.likes.indexOf(articleID), 1);
            localStorage.setItem('sew-data', JSON.stringify(sewLocalStorage));
            likeSVGLink[0].firstElementChild.style.fill='#9e9e9e'
            $(`#${articleID}-likes`).text( parseInt($(`#${articleID}-likes`).text()) - 1 );
            if ($(window).width() > 600){
                likeSVGLink[0].setAttribute('data-tooltip', 'Leave a like');
                likeSVGLink.tooltip();
            }
            $.ajax({
                type: 'POST',
                url: `${window.location.pathname}/like`,
                data: {
                    id: articleID
                },
                success: res => {
                    if(!res.success) console.log('ERROR on the server. Can\'t unlike now');
                }
            });
        }
    });
});

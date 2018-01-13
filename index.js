const express = require('express');
const app = express();

const data = {
    articles: [{
        id: '1',
        tag: 'SELF',
        section: 'self',
        name: 'The way I become succefffffffssful , sit amet consectetur adipisicing elit. Rerum doloremque  ',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'h2',
                text: '1. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'h2',
                text: '2. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            }
        ],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'the-way-i-become-successful',
        likes: 273
    },{
        id: '2',
        tag: 'SELF',
        section: 'self',
        name: 'Become successful',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'h1',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'h1',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'h3',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            }
        ],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'become-successful',
        likes: 273
    },{
        id: '3',
        tag: 'LOVE',
        section: 'love',
        name: 'To become a millionaire in 1 year',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            }
        ],
        image: 'sample2.jpg',
        date: 'November 17, 2017',
        url: 'to-become-a-millionaire-in-1-year',
        likes: 11
    },{
        id: '4',
        tag: 'FAMILY',
        section: 'family',
        name: 'To become shiny and passionate',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            }
        ],
        image: 'sample2.jpg',
        date: 'December 27, 2017',
        url: 'to-become-shiny-and-passionate',
        likes: 234
    }]
};

/* MIDDLEWARES */
app.set('view engine', 'ejs');
app.locals.rmWhitespace = true;
app.use('*/public', express.static('public'));


/* REQUEST HANDLERS */
// Main
app.get('/', (req, res) => {
    const popular = data.articles.sort((f,s) => f.likes < s.likes);
    res.render('articles-list', { data: {name: 'POPULAR', articles: popular} }); /* Implement .slice(0, 5) and pagination */
});
app.get('/self', (req, res) => {
    const self = data.articles.filter(a => a.tag === 'SELF');
    res.render('articles-list', { data: {name: 'SELF', articles: self} });
});
app.get('/love', (req, res) => {
    const love = data.articles.filter(a => a.tag === 'LOVE');
    res.render('articles-list', { data: {name: 'LOVE', articles: love} });
});
app.get('/career', (req, res) => {
    const career = data.articles.filter(a => a.tag === 'CAREER');
    res.render('articles-list', { data: {name: 'CAREER', articles: career} });
});
app.get('/family', (req, res) => {
    const family = data.articles.filter(a => a.tag === 'FAMILY');
    res.render('articles-list', { data: {name: 'FAMILY', articles: family} });
});
// Article
app.get('/*/:article', (req, res) => {
    const url = req.params.article;
    let article;
    data.articles.map(a => {
        if(a.url === url){
            article = a;
        }
    });
    res.render('article', { article });
});
// Other
app.get('*', (req, res) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.status(404).render('not-found', {data: url});
});
app.all('*', (req, res) => {
    res.status(403).send('Sorry, you can\'t do this...');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
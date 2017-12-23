const express = require('express');
const app = express();

const data = {
    articles: [{
        id: '1',
        tag: 'SELF',
        tagClass: 'self',
        name: 'The way I become successful',
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'the-way-i-become-successful',
        likes: 273
    },{
        id: '2',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'To become a millionaire in 1 year',
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample2.jpg',
        date: 'November 17, 2017',
        url: 'to-become-a-millionaire-in-1-year',
        likes: 11
    },{
        id: '3',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'How to overcome anxiety',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample2.jpg',
        date: 'May 23, 2017',
        url: 'how-to-overcome-anxiety',
        likes: 345
    },{
        id: '4',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'The last article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'December 17, 2017',
        url: 'last-article',
        likes: 3212
    },
    {
        id: '5',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'last-article',
        likes: 53
    },{
        id: '6',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        url: 'last-article',
        likes: 8
    },
    {
        id: '7',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'last-article',
        likes: 12
    },{
        id: '8',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        url: 'last-article',
        likes: 96
    },
    {
        id: '9',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        url: 'last-article',
        likes: 48
    },{
        id: '10',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        url: 'last-article',
        likes: 37
    }]
};

/* MIDDLEWARES */
app.set('view engine', 'ejs');
app.locals.rmWhitespace = true;
app.use('/public', express.static('public'));


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
// Articles
app.get('/:article', (req, res) => {
    console.log('url',req.originalUrl)
    console.log('url fixed',req.originalUrl.substring(1))
    res.render('articles-list', { data: {name: 'FAMILY', articles: data.articles} });
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
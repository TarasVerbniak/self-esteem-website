const express = require('express');
const app = express();

const popular = {
    name: 'POPULAR',
    articles: [{
        id: '1',
        tag: 'SELF',
        tagClass: 'self',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        likes: 23
    },{
        id: '2',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample2.jpg',
        date: 'November 17, 2017',
        likes: 11
    },{
        id: '2',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'The third article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample2.jpg',
        date: 'May 23, 2017',
        likes: 345
    },{
        id: '2',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'The last article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'December 17, 2017',
        likes: 3212
    }]
};

const self = {
    name: 'SELF',
    articles: [{
        id: '1',
        tag: 'SELF',
        tagClass: 'self',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        likes: 23
    },{
        id: '2',
        tag: 'SELF',
        tagClass: 'self',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        likes: 11
    }]
};

const love = {
    name: 'LOVE',
    articles: [{
        id: '1',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        likes: 23
    },{
        id: '2',
        tag: 'LOVE',
        tagClass: 'love',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        likes: 11
    }]
};
const career = {
    name: 'CAREER',
    articles: [{
        id: '1',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        likes: 23
    },{
        id: '2',
        tag: 'CAREER',
        tagClass: 'career',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        likes: 11
    }]
};
const family = {
    name: 'FAMILY',
    articles: [{
        id: '1',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'This is the best website ever done!',    
        paragraphs: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        image: 'sample1.jpg',
        date: 'December 23, 2017',
        likes: 23
    },{
        id: '2',
        tag: 'FAMILY',
        tagClass: 'family',
        name: 'The second article from the "self" series',    
        paragraphs: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione sed soluta cum rerum sapiente accusantium, optio iusto dolores ipsum.'],
        image: 'sample1.jpg',
        date: 'November 17, 2017',
        likes: 11
    }]
};

/* MIDDLEWARES */
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


/* REQUEST HANDLERS */
app.get('/', (req, res) => {
    const sortedPopular = popular.articles.sort((f,s) => f.likes < s.likes);
    res.render('articles-list', {data: popular});
});
app.get('/self', (req, res) => {
    res.render('articles-list', {data: self});
});
app.get('/love', (req, res) => {
    res.render('articles-list', {data: love});
});
app.get('/career', (req, res) => {
    res.render('articles-list', {data: career});
});
app.get('/family', (req, res) => {
    res.render('articles-list', {data: family});
});
app.get('*', (req, res) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.render('not-found', {data: url});
});
app.all('*', (req, res) => {
    res.send('Sorry, you can\'t do this...');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
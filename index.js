const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Article = require('./dbmodels/article');
const Keys = require('../config/keys');
const app = express();
let PORT;

/* DATABASES */
let dbConnection;
let backupDbConnection;
if(process.env.NODE_ENV === 'production'){
    PORT = process.env.PORT || 80;
    dbConnection = mongoose.createConnection(Keys.PROD_DB_URI, { useMongoClient: true });
    backupDbConnection = mongoose.createConnection(Keys.BACKUP_DB_URI, { useMongoClient: true });
} else {
    PORT = 8000;
    dbConnection = mongoose.createConnection('mongodb://localhost/sew-development', { useMongoClient: true });
}
const DB = dbConnection.model('Article', Article.Schema);

/* MIDDLEWARES */
app.set('view engine', 'ejs');
app.locals.rmWhitespace = true;
app.use('*/public', express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


/* REQUEST HANDLERS */
// Main
app.get('/', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const popular = articles.sort((f,s) => f.likes < s.likes);
            res.render('articles-list', { data: {name: 'POPULAR', articles: popular} }); /* Implement .slice(0, 5) and pagination */
        } else {
            console.log('ERROR', err);
        }
    });
});
// Lists of articles for particular section
app.get('/:section', (req, res) => {
    const section = req.params.section.toUpperCase();

    DB.find((err, articles) => {
        if(!err){
            const data = articles.filter(a => a.tag === section);
            res.render('articles-list', { data: {name: section, articles: data} });
        } else {
            console.log('ERROR', err);
        }
    });
});
// Single article
app.get('/*/:article', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const url = req.params.article;
            let article;
            articles.map(a => {
                if(a.url === url){
                    article = a;
                }
            });
            res.render('article', { article });            
        } else {
            console.log('ERROR');
        }
    });
});
// Article like
app.post('/*/*/like', (req, res) => {
    const id = req.body.id;
    const isLike = req.body.like;
    let newLikes;

    DB.findById(id, (err, article) => {
        if(!err){
            if(isLike){
                newLikes = article.likes + 1;
            } else {
                newLikes = article.likes - 1;
            }

            DB.findByIdAndUpdate(id, {likes: newLikes }, (err, article) => {
                if(!err){
                    res.send({success: true, likes: newLikes});
                } else {
                    res.send({success: false});        
                }
            });
        } else {
            res.send({success: false});
            console.log('ERROR in updating article\'s likes', err);
        }
    });
});
// Other
app.get('*', (req, res) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.status(404).render('not-found', {data: url});
});
app.all('*', (req, res) => {
    res.status(403).send('Sorry, you can\'t do this...');
});

/* CONNECTION */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
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
app.get('/self', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const self = articles.filter(a => a.tag === 'SELF');
            res.render('articles-list', { data: {name: 'SELF', articles: self} });
        } else {
            console.log('ERROR', err);
        }
    });
});
app.get('/love', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const love = articles.filter(a => a.tag === 'LOVE');
            res.render('articles-list', { data: {name: 'LOVE', articles: love} });
        } else {
            console.log('ERROR', err);
        }
    });
});
app.get('/career', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const career = articles.filter(a => a.tag === 'CAREER');
            res.render('articles-list', { data: {name: 'CAREER', articles: career} });
        } else {
            console.log('ERROR', err);
        }
    });
});
app.get('/family', (req, res) => {
    DB.find((err, articles) => {
        if(!err){
            const family = articles.filter(a => a.tag === 'FAMILY');
            res.render('articles-list', { data: {name: 'FAMILY', articles: family} });
        } else {
            console.log('ERROR', err);
        }
    });
});
// Article
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
// Other
app.get('*', (req, res) => {
    const url = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.status(404).render('not-found', {data: url});
});
app.all('*', (req, res) => {
    res.status(403).send('Sorry, you can\'t do this...');
});

// Connection
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
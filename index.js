const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/self', (req, res) => {
    res.render('home');
});
app.get('/love', (req, res) => {
    res.render('home');
});
app.get('/career', (req, res) => {
    res.render('home');
});
app.get('/family', (req, res) => {
    res.render('home');
});
app.get('*', (req, res) => {
    res.send('Sorry, webpage is not found...');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('home');
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
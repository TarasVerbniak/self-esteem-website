const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
        tag: String,
        section: String,
        name: String,
        summary: [String],
        paragraphs: [
            {
                tag: String,
                text: String
            }
        ],
        image: String,
        date: String,
        url: String,
        likes: Number
});

module.exports.Schema = articleSchema;

const Article = module.exports = mongoose.model('Article', adrticleSchema);

// Get articles
module.exports.getArticles = (callback, limit) => {
    Article.find(callback).limit(limit);
}
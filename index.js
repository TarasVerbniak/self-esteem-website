const express = require('express');
const app = express();

const data = {
    articles: [{
        id: '1',
        tag: 'SELF',
        section: 'self',
        name: 'Corporis, quis sit amet consectetur natus velit repellendus molestiae maiores ipsam dolor',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Crash against wall but walk away like nothing happened rub whiskers on bare skin act innocent, climb a tree, wait for a fireman jump to fireman then scratch his face, or you call this cat food, poop in litter box, scratch the walls. Cat slap dog in face refuse to drink water except out of someone\'s glass so intently stare at the same spot jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water and meowing chowing and wowing. Meow to be let in cough furball.'
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
        name: 'Ratione accusantium, dolor exceptur?',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
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
                tag: 'h2',
                text: '2. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'h2',
                text: '3. Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum. Rerum doloremque veritatis voluptatem ad? '
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
        name: 'Rerum doloremque veritatis',
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
        name: 'Bandwidth product management breakout fastworks',
        summary: ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, mollitia.'],
        paragraphs: [
            {
                tag: 'p',
                text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum doloremque veritatis voluptatem ad? Aut, non optio pariatur reiciendis, natus velit repellendus molestiae corrupti maiores ipsam odio dolor. Corporis, quis rerum.'
            },
            {
                tag: 'p',
                text: 'Push back quick win i don\'t want to drain the whole swamp, i just want to shoot some alligators so this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables. Idea shower punter paddle on both sides product management breakout fastworks. Organic growth we need to button up our approach wiggle room. Globalize. Shoot me an email high touch client this is not the hill i want to die on, and game plan, but upsell. Shoot me an email idea shower, yet push back, streamline. Meeting assassin paddle on both sides, yet re-inventing the wheel. What do you feel you would bring to the table if you were hired for this position bells and whistles streamline hit the ground running.'
            },
            {
                tag: 'p',
                text: 'Closing these latest prospects is like putting socks on an octopus critical mass, or paddle on both sides i also believe it\'s important for every member to be involved and invested in our company and this is one way to do so window-licker, for bells and whistles, and bleeding edge. Productize game plan, but synergize productive mindfulness so overcome key issues to meet key milestones, yet vertical integration, so we want to see more charts.'
            },
            {
                tag: 'p',
                text: 'Take five, punch the tree, and come back in here with a clear head we need to socialize the comms with the wider stakeholder community. This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables blue money high touch client for highlights yet we need to start advertising on social media. Take five, punch the tree, and come back in here with a clear head price point. Diversify kpis shotgun approach, so fire up your browser, or message the initiative at the end of the day. Pig in a python viral engagement pulling teeth, and cross sabers. We need distributors to evangelize the new line to local markets after I ran into Helen at a restaurant, I realized she was just office pretty. Good optics what\'s the status on the deliverables for eow?. We need to button up our approach screw the pooch, driving the initiative forward yet productize. Collaboration through advanced technlogy.'
            },
            {
                tag: 'p',
                text: 'Can you make the logo bigger yes bigger bigger still the logo is too big. Something summery; colourful can you turn it around in photoshop so we can see more of the front, so we don\'t need a contract, do we other agencies charge much lesser. Jazz it up a little what you\'ve given us is texty, we want sexy yet can you make it look like this clipart i found yet try a more powerful colour can you make the logo bigger yes bigger bigger still the logo is too big and we have big contacts we will promote you we exceed the clients\' expectations. Can you make pink a little more pinkish is this the best we can do, or low resolution? It looks ok on my screen it\'s great, can you add a beard though but jazz it up a little, yet can you make pink a little more pinkish. Needs to be sleeker the flier should feel like a warm handshake give us a complimentary logo along with the website can you help me out?'
            },
            {
                tag: 'p',
                text: 'Remember, everything is the same or better i\'ll pay you in a week we don\'t need to pay upfront i hope you understand. This looks perfect. Just Photoshop out the dog, add a baby, and make the curtains blue. I really think this could go viral low resolution?'
            },
            {
                tag: 'p',
                text: 'I really like the colour but can you change it, can you make it look like this clipart i found yet I really think this could go viral we are a non-profit organization. The website doesn\'t have the theme i was going for. Can you make the font bigger? we don\'t need a backup, it never goes down!. We exceed the clients\' expectations can you turn it around in photoshop so we can see more of the front, are you busy this weekend? I have a new project with a tight deadline, and that sandwich needs to be more playful, for start on it today and we will talk about what i want next time thanks for taking the time to make the website, but i already made it in wix. That\'s great!'
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
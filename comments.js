// Create web server with Express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// Create comments array
const comments = [
    { username: 'Todd', comment: 'lol that is so funny!' },
    { username: 'Skyler', comment: 'I like to go birdwatching with my dog' },
    { username: 'Sk8erBoi', comment: 'Plz delete your account, Todd' },
    { username: 'onlysayswoof', comment: 'woof woof woof' },
];
// Use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
// Set view engine to ejs
app.set('view engine', 'ejs');
// GET /comments
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
});
// GET /comments/new
app.get('/comments/new', (req, res) => {
    res.render('comments/new');
});
// POST /comments
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment });
    res.redirect('/comments');
});
// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
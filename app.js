const express = require('express')
const { render } = require('ejs')

//express app
const app = express();

//register view engine.
app.set('view engine', 'ejs');

//listen for requests.
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yosh finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yosh finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Yosh finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
res.render('index', {title: 'Home', /*blogs: blogs*/ blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/blogs/create', (req,res) => {
    res.render('create', {title: 'Create new Blog'});
});

//404 page
app.use( (req, res) => {
    res.status(404).render('404', {title: '404'});
});

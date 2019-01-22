const express = require('express');
const path = require('path');

const app = express();

const examples = [
    {
        name: 'Basic Drawing',
        slug: 'basic-drawing',
        screenshot: 'https://rr16.s-ul.eu/njfKzcxpcDg53UgA.ext',
        description: 'A basic example with nothing more than drawing on a canvas.',
    },
];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));

app.use('/static', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.render('index', {
        examples,
    });
});

app.get('/example/:slug', (req, res) => {
    const example = examples.filter(example => example.slug === req.params.slug)[0];
    if (!example) return res.status(404).render('404');
    else res.render('example', {
        example,
    });
});

app.listen(5000);
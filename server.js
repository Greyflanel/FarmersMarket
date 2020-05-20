const express = require('express');
const CORS = require('cors');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(CORS());

const items = [
    {
        id: 0,
        name: 'Cherry Tomatoes',
        pricePerPound: 0.50,
    },

    {
        id: 1,
        name: 'Bananas',
        pricePerPound: 0.80,
    },

    {
        id: 2,
        name: 'Grapes',
        pricePerPound: 1.00,
    },

    {
        id: 3,
        name: 'Oranges',
        pricePerPound: 1.20,
    },

    {
        id: 4,
        name: 'Strawberries',
        pricePerPound: 2.00,
    },

    {
        id: 5,
        name: 'Watermelon',
        pricePerPound: 1.50,
    },

    {
        id: 6,
        name: 'Jalapeno Peppers',
        pricePerPound: 0.60,
    }
];

app.get('/', (req, res) => {
	res.send(items);
});

app.get('/api/items/:id', (req, res) => {
	const item = items.filter(item => item.id.toString() === req.params.id)[0];
	res.status(200).json(item);
});

app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
const express = require('express');
const CORS = require('cors');

const app = express();

app.use(express.json());
app.use(CORS());


const items = [
  {
    id: 0,
    name: "Cherry Tomatoes",
    pricePerPound: 0.5,
    image:
      "https://gardenandhappy.com/wp-content/uploads/2018/07/Bing-Cherry-Tomatoes.png",
  },

  {
    id: 1,
    name: "Bananas",
    pricePerPound: 0.8,
    image:
      "https://149366112.v2.pressablecdn.com/wp-content/uploads/2013/06/ripe-unripe-bananas.jpg",
  },

  {
    id: 2,
    name: "Grapes",
    pricePerPound: 1.0,
    image:
      "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/content/66/d8/d65cfa263546a30df60d24626846/grapes1._TTW_._CR0,20,400,225_.jpg",
  },

  {
    id: 3,
    name: "Oranges",
    pricePerPound: 1.2,
    image:
      "https://www.juicebuff.com/wp-content/uploads/2019/04/Oranges-For-Juicing-1.jpg",
  },

  {
    id: 4,
    name: "Strawberries",
    pricePerPound: 2.0,
    image:
      "https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },

  {
    id: 5,
    name: "Watermelon",
    pricePerPound: 1.5,
    image:
      "https://media.gettyimages.com/photos/melon-wallpaper-picture-id157405770?s=612x612",
  },

  {
    id: 6,
    name: "Jalapeno Peppers",
    pricePerPound: 0.6,
    image:
      "https://www.pepperscale.com/wp-content/uploads/2013/06/jalapeno-pepper-1.jpg",
  },

  {
    id: 7,
    name: "Blueberries",
    pricePerPound: 1.8,
    image:
      "https://extension.umaine.edu/blueberries/wp-content/uploads/sites/41/2020/01/Blueberries-picked-1-846x476.jpg",
  },
];


const users = [
  {
  userName: "",
  password: ""
}
  
];


app.get('/', (req, res) => {
	res.send(items);
});

app.get('/products/:id', (req, res) => {
	const item = items.filter(item => item.id.toString() === req.params.id)[0];
	res.status(200).json(item);
});


app.listen(5000, () => {
	console.log('Server listening on port 5000');
});
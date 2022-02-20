import React, {useState} from 'react';
import Card from './Card';
import ButtonPanel from './ButtonPanel';
import '../bem.css';

const mockDatabase = [
    /* , imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg' */
    /* eslint-disable-next-line object-curly-newline */
    {
        desc: 'Sale!',
        title: 'AMD Ryzen 5 5600X',
        price: 270,
        onSale: true,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg',
        category: 'cpu',
    },
    {
        title: 'AMD Ryzen 7 5800X',
        price: 345,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.1600.jpg',
        category: 'cpu',
    },
    {
        title: 'Intel Core i5-12600K',
        price: 260,
        onSale: true,
        desc: 'Sale!',
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3f727799b9fc5e83f0e8953759946bd2.1600.jpg',
        category: 'cpu',
    },
    {
        title: 'Intel Core i7-12700K',
        price: 375,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3f7037db801def4db8418df8e7498e6a.1600.jpg',
        category: 'cpu',
    },
    {
        title: 'Asus TUF GAMING X570-PLUS (WI-FI)',
        price: 190,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/8d7d0435e8a2af93b5d91a1a5dccd476.1600.jpg',
        category: 'motherboard',
    },
    {
        title: 'MSI MAG B550 TOMAHAWK',
        price: 180,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/52ee465cbd64b16145232d863524c066.1600.jpg',
        category: 'motherboard',
    },
    {
        title: 'Gigabyte B450M DS3H V2',
        price: 78,
        onSale: true,
        desc: 'Sale!',
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/9f1e25ead11543d7db4c9cd9ffdb7271.1600.jpg',
        category: 'motherboard',
    },
    {
        title: 'ASRock B450M Pro4',
        price: 100,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/8f8baff091bfd5ef531c7ddb1a602ca4.1600.jpg',
        category: 'motherboard',
    },
    {
        title: 'Corsair Vengeance LPX 16 GB',
        price: 78,
        onSale: true,
        desc: 'Sale!',
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/0d7ccc6bb32c1a857bdfc56d9eb74081.1600.jpg',
        category: 'memory',
    },
    {
        title: 'Corsair Vengeance RGB Pro 16 GB',
        price: 83,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/87cd8e9d02ffb0997769f4a4d5969669.1600.jpg',
        category: 'memory',
    },
    {
        title: 'G.Skill Ripjaws V Series 32 GB',
        price: 119,
        onSale: true,
        desc: 'Sale!',
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/f97fce0b44ff2447a790b0bffc74f9f3.1600.jpg',
        category: 'memory',
    },
    {
        title: 'Crucial Ballistix 16 GB',
        price: 75,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/aa34b3c28154431c4b8ebd2f90a647e4.1600.jpg',
        category: 'memory',
    },
    {
        title: 'EVGA XC GAMING GeForce RTX 3060',
        price: 761,
        imgLocation: 'https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg',
        category: 'gpu',
    },
    {
        title: 'Asus GeForce RTX 2060',
        price: 439,
        imgLocation: 'https://m.media-amazon.com/images/I/51FcVHzQHZL.jpg',
        category: 'gpu',
    },
    {
        title: 'NVIDIA GeForce RTX 3060 Ti Founders Edition',
        price: 813,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/48eea8a717330fc5dd5856b1fae65042.1600.jpg',
        category: 'gpu',
    },
    {
        title: 'MSI GeForce GTX 1050 Ti',
        price: 300,
        imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/1085f0f0294e6eb6340c70bf6324a9f8.1600.jpg',
        category: 'gpu',
    },
];

function renderCards(cards, filters) {
    let filteredCards = [...cards];
    if (filters) {
        // eslint-disable-next-line guard-for-in,no-restricted-syntax,no-unused-vars
        Object.values(filters).forEach((filterFunc) => {
            filteredCards = filterFunc(filteredCards);
        });
    }
    return filteredCards.map((result) => {
        return (
            <Card
                desc={result.desc}
                price={result.price}
                title={result.title}
                onSale={result.onSale}
                imgLocation={result.imgLocation}
            />
        );
    });
}

function App() {
    const [stateCards, setCards] = useState(mockDatabase);
    const [stateFilters, setFilters] = useState([]);
    return (
        <div id="app">
            <ButtonPanel cardDB={stateCards} changeCards={setCards} setFilters={setFilters} filters={stateFilters} />
            <div id="cards">
                {renderCards(stateCards, stateFilters)}
            </div>
        </div>
    );
}

export default App;

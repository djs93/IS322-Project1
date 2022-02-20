import React, {useState} from 'react';
import Card from './Card';
import ButtonPanel from './ButtonPanel';
import '../bem.css';

const mockDatabase = [
    /* , imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg' */
    /* eslint-disable-next-line object-curly-newline */
    {desc: 'Sale!', title: 'AMD Ryzen 5 5600X', price: 270, onSale: true, imgLocation: 'https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.1600.jpg'},
    {title: 'Article 2', price: 5},
    {title: 'Article 3', price: 7},
    {title: 'Article 4', price: 6},
    {title: 'Article 5', price: 6},
    {title: 'Article 6', price: 9},
    /* eslint-disable-next-line object-curly-newline */
    {desc: 'Sale!', title: 'Article 7', price: 3, onSale: true},
    {title: 'Article 8', price: 6},
    {title: 'Article 9', price: 8},
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

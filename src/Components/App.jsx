import React, {useState} from 'react';
import Card from './Card';
import ButtonPanel from './ButtonPanel';
import '../bem.css';

const mockDatabase = [
    /* eslint-disable-next-line object-curly-newline */
    {desc: 'Sale!', title: 'Article 1', price: 1, onSale: true},
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

function renderCards(cards) {
    return cards.map((result) => {
        return <Card desc={result.desc} price={result.price} title={result.title} onSale={result.onSale} />;
    });
}

function App() {
    const [stateCards, setCards] = useState(mockDatabase);
    return (
        <div id="app">
            <ButtonPanel cardDB={stateCards} changeCards={setCards} />
            <div id="cards">
                {renderCards(stateCards)}
            </div>
        </div>
    );
}

export default App;

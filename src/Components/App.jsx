import React, {useState} from 'react';
import Card from './Card';

const mockDatabase = [
    {desc: 'Sale!', title: 'Article 1', price: 1},
    {title: 'Article 2', price: 5},
    {title: 'Article 3', price: 7},
    {title: 'Article 4', price: 6},
    {title: 'Article 5', price: 6},
    {title: 'Article 6', price: 9},
    {desc: 'Sale!', title: 'Article 7', price: 3},
    {title: 'Article 8', price: 6},
    {title: 'Article 9', price: 8},
];

function renderCards(cards) {
    const cardHTML = cards.map((result) => {
        return <Card desc={result.desc} price={result.price} title={result.title} />;
    });

    return cardHTML;
}

function App() {
    const [stateCards, setCards] = useState(mockDatabase);
    return (
        <div id="app">
            <div id="buttons" />
            <div id="cards">
                {renderCards(stateCards)}
            </div>
        </div>
    );
}

export default App;

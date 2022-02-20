import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';

function Card({title, desc, price}) {
    return (
        <div className="card">
            <div className="card__content" />

            <div className="card__title_and_price">
                <div className="card__title">
                    {title}
                </div>

                <div className="card__price">
                    ${price}
                </div>
            </div>
            {desc === '' ? '' : (
                <div className="card__body">
                    {desc}
                </div>
            )}

        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string,
    desc: PropTypes.string,
    price: PropTypes.number,
};
Card.defaultProps = {
    title: 'world!',
    desc: '',
    price: -1,
};

export default Card;

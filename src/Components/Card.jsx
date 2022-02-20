import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';
/* eslint-disable-next-line object-curly-newline */
function Card({title, desc, price, onSale, imgLocation}) {
    return (
        <div className="card">
            <img src={imgLocation} alt="Card" className="card__content" />

            <div className="card__title_and_price">
                <div className="card__title">
                    {title}
                </div>

                <div className={onSale ? 'card__price-sale' : 'card__price'}>
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
    onSale: PropTypes.bool,
    imgLocation: PropTypes.string,
};
Card.defaultProps = {
    title: 'world!',
    desc: '',
    price: -1,
    onSale: false,
    imgLocation: '/images/no-image.webp',
};

export default Card;

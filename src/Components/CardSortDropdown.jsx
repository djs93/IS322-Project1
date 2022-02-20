import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';

function orderBy(sortValue, sortList) {
    const sortListClone = [...sortList];
    const sortedResults = (sortValue === 'title')
        ? sortListClone.sort((a, b) => { // Strings need to be sorted in a slightly more complex way
            const nameA = a.title.toUpperCase(); // ignore upper and lowercase
            const nameB = b.title.toUpperCase(); // ignore upper and lowercase
            // Sorts alphabetically.  -1 puts it before. 1 puts it after
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
        : sortListClone.sort((a, b) => { // Numbers a booleans are much simpler.
            // Just need postive or negative number
            // Object properties can be accessed through a string representing their name
            return a[sortValue] - b[sortValue];
        });
    return sortedResults;
}

function CardSortDropdown({cardDB, changeCards}) {
    return (
        <div id="cardDropdown">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="orderBy">Order By</label>
            <select
                id="orderBy"
                name="orderBy"
                onChange={(event) => {
                    changeCards(orderBy(event.target.value, cardDB));
                }}
            >
                <option value="title">Name</option>
                <option value="price">Price</option>
            </select>
        </div>
    );
}

CardSortDropdown.propTypes = {
    cardDB: PropTypes.array,
    changeCards: PropTypes.func,
};
CardSortDropdown.defaultProps = {
    cardDB: [],
    changeCards: () => { console.warn('changeCard function not passed to ButtonPanel!!'); },
};

export default CardSortDropdown;

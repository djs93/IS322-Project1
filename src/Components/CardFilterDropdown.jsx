import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';

// eslint-disable-next-line object-curly-newline
function CardFilterDropdown({filters, setFilters, toggleText, filterOptions}) {
    return (
        <div className="card_filter_dropdown">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="filterBy">{toggleText}</label>
            <select
                id="filterBy"
                name="filterBy"
                onChange={(event) => {
                    const newFilters = [...filters];
                    Object.values(newFilters).forEach((filterFunc) => {
                        if (filterFunc.name in filterOptions) {
                            const funcIndex = newFilters.indexOf(filterFunc);
                            if (funcIndex > -1) {
                                newFilters.splice(funcIndex, 1);
                            }
                        }
                    });
                    newFilters.push(filterOptions[event.target.value]);
                    setFilters(newFilters);
                }}
            >
                {Object.keys(filterOptions).map((result) => {
                    return (
                        <option value={result}>{result}</option>
                    );
                })}
            </select>
        </div>
    );
}

CardFilterDropdown.propTypes = {
    filters: PropTypes.array,
    setFilters: PropTypes.func,
    toggleText: PropTypes.string,
    filterOptions: PropTypes.object,
};
CardFilterDropdown.defaultProps = {
    filters: [],
    setFilters: () => {
        console.warn('setFilters function not passed to CardFilterDropdown!!');
    },
    toggleText: '',
    filterOptions: {},
};

export default CardFilterDropdown;

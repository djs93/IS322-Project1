import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';

// eslint-disable-next-line object-curly-newline
function CardToggleFilter({filters, setFilters, toggleText, toggleName, toggleFunc}) {
    return (
        <div id="cardDropdown">
            <form>
                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label htmlFor={toggleName}>{toggleText}</label>
                <input
                    type="checkbox"
                    id={toggleName}
                    name={toggleName}
                    onChange={
                        (event) => {
                            console.log('A');
                            const newFilters = [...filters];
                            if (event.target.checked) {
                                newFilters.push(toggleFunc);
                            }
                            else {
                                const funcIndex = newFilters.indexOf(toggleFunc);
                                if (funcIndex > -1) {
                                    newFilters.splice(funcIndex, 1);
                                }
                            }
                            setFilters(newFilters);
                        }
                    }
                />
            </form>
        </div>
    );
}

CardToggleFilter.propTypes = {
    filters: PropTypes.array,
    setFilters: PropTypes.func,
    toggleText: PropTypes.string,
    toggleName: PropTypes.string,
    toggleFunc: PropTypes.func,
};
CardToggleFilter.defaultProps = {
    filters: [],
    setFilters: () => {
        console.warn('setFilters function not passed to CardToggleFilter!!');
    },
    toggleText: '',
    toggleName: '',
    toggleFunc: () => {
        console.warn('toggleFunc function not passed to CardToggleFilter!!');
    },
};

export default CardToggleFilter;

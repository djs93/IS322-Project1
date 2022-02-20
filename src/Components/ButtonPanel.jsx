import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';
import CardSortDropdown from './CardSortDropdown';
import CardToggleFilter from './CardToggleFilter';
import {ToggleOnSale} from '../ToggleFunctions';
import CardFilterDropdown from './CardFilterDropdown';
import { FilterByComponentType } from '../FilterFunctions';
/* eslint-disable-next-line object-curly-newline */
function ButtonPanel({cardDB, changeCards, filters, setFilters}) {
    return (
        <div id="buttonPanel">
            <CardSortDropdown changeCards={changeCards} cardDB={cardDB} />
            <CardFilterDropdown
                filters={filters}
                setFilters={setFilters}
                toggleText="Component Type"
                toggleName="compType"
                filterOptions={{
                    // eslint-disable-next-line brace-style
                    All: (cards) => { return FilterByComponentType(cards, 'all'); },
                    // eslint-disable-next-line brace-style
                    CPU: (cards) => { return FilterByComponentType(cards, 'cpu'); },
                    // eslint-disable-next-line brace-style
                    GPU: (cards) => { return FilterByComponentType(cards, 'gpu'); },
                    // eslint-disable-next-line brace-style
                    Motherboard: (cards) => { return FilterByComponentType(cards, 'motherboard'); },
                    // eslint-disable-next-line brace-style
                    Memory: (cards) => { return FilterByComponentType(cards, 'memory'); },
                }}
            />
            <CardToggleFilter
                filters={filters}
                setFilters={setFilters}
                toggleText="On Sale"
                toggleName="onSale"
                toggleFunc={ToggleOnSale}
            />
        </div>
    );
}

ButtonPanel.propTypes = {
    cardDB: PropTypes.array,
    changeCards: PropTypes.func,
    filters: PropTypes.array,
    setFilters: PropTypes.func,
};
ButtonPanel.defaultProps = {
    cardDB: [],
    changeCards: () => {
        console.warn('changeCard function not passed to ButtonPanel!!');
    },
    filters: [],
    setFilters: () => {
        console.warn('setFilters function not passed to ButtonPanel!!');
    },
};

export default ButtonPanel;

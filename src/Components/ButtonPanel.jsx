import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';
import CardSortDropdown from './CardSortDropdown';
import CardToggleFilter from './CardToggleFilter';
import {ToggleOnSale} from '../ToggleFunctions';
/* eslint-disable-next-line object-curly-newline */
function ButtonPanel({cardDB, changeCards, filters, setFilters}) {
    return (
        <div id="buttonPanel">
            <CardSortDropdown changeCards={changeCards} cardDB={cardDB} />
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

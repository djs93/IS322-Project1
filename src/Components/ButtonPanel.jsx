import React from 'react';
import PropTypes from 'prop-types';
import '../bem.css';
import CardSortDropdown from './CardSortDropdown';

function ButtonPanel({cardDB, changeCards}) {
    return (
        <div id="buttonPanel">
            <CardSortDropdown changeCards={changeCards} cardDB={cardDB} />
        </div>
    );
}

ButtonPanel.propTypes = {
    cardDB: PropTypes.array,
    changeCards: PropTypes.func,
};
ButtonPanel.defaultProps = {
    cardDB: [],
    changeCards: () => { console.warn('changeCard function not passed to ButtonPanel!!'); },
};

export default ButtonPanel;

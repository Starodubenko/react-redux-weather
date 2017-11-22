import * as React from 'react';
import propTypes from 'prop-types';

import './Header.scss'

const Header = ({ leftComponent, rightComponent }) => (
    <div className="Header">
        <div className="Header__Cell">
            {leftComponent}
        </div>
        <div className="Header__Cell">
            {rightComponent}
        </div>
    </div>
);

Header.propTypes = {
    leftComponent: propTypes.node,
    rightComponent: propTypes.node,
}

export default Header;
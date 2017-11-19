import * as React from 'react';

import './Header.scss'

const Header = ({ leftComponent, rightComponent }) => (
    <div className="Header">
        <div className="Header__LeftSide">
            <div>
                sdfhjsdfbh
            </div>
        </div>
        <div className="Header__RigthSide">
            {rightComponent}
        </div>
    </div>
);

export default Header;
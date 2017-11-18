import * as React from 'react';

import './CityAutoComplete.scss'

const CityAutoComplete = ({ message }) => (
    <div className="CityAutoComplete">
        <div className="CityAutoComplete__Message">
            {message}
        </div>
    </div>
);

export default CityAutoComplete;
import * as React from 'react';

import './AddCity.scss'

const AddCity = ({ message }) => (
    <div className="AddCity">
        <div className="AddCity__Message">
            {message}
        </div>
    </div>
);

export default AddCity;
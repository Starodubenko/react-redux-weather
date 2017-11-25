import * as React from 'react';
import propTypes from 'prop-types';
import { getCesiumDegree } from '../../utils';

import './TemperatureDegreeIndicator.scss'

const TemperatureDegreeIndicator = ({ value }) => (
    <div className="TemperatureDegreeIndicator">
        {getCesiumDegree(value)}
    </div>
)

TemperatureDegreeIndicator.propTypes = {
    value: propTypes.string,
}

TemperatureDegreeIndicator.defaultProps = {
    value: 50,
}

export default TemperatureDegreeIndicator;
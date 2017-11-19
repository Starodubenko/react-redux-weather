import * as React from 'react';
import propTypes from 'prop-types';

import './TemperatureDegreeIndicator.scss'

class TemperatureDegreeIndicator extends React.Component {
    renderValue = () => {
        const value = this.props.value;
        let resultString = '';

        if (value === undefined){
            return resultString;
        }

        if (value > 0) {
            resultString = '+';
        }

        resultString = resultString + value + '°C';
        
        return resultString;
    }

    render() {
        return (
            <div className="TemperatureDegreeIndicator">
                {this.renderValue()}
            </div>
            )
    }
}

TemperatureDegreeIndicator.propTypes = {
    value: propTypes.number,
}

TemperatureDegreeIndicator.defaultProps = {
    value: 50,
}

export default TemperatureDegreeIndicator;
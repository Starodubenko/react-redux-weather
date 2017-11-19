import * as React from 'react';
import propTypes from 'prop-types';

import Slider from '../common/Slider';
import TemperatureDegreeIndicator from '../TemperatureDegreeIndicator';

import './WeatherTemperatureFilter.scss'

class WeatherTemperatureFilter extends React.Component {
    onTemperetureSliderChange = (degree) => this.props.setTemperatureFilter({ degree: Math.round(degree) });

    render() {
        const { range, value } = this.props;
        return (
            <div className="WeatherTemperatureFilter">
                <Slider 
                    min={range.min} 
                    max={range.max} 
                    value={value} 
                    onChange={this.onTemperetureSliderChange}
                    indicator={<TemperatureDegreeIndicator />}
                />
            </div>
        )
    }
}

WeatherTemperatureFilter.propTypes = {
    range: propTypes.shape({
        min: propTypes.number,
        max: propTypes.number,
    }),
    value: propTypes.number,
    setTemperatureFilter: propTypes.func,
}


export default WeatherTemperatureFilter;
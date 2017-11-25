import * as React from 'react';
import propTypes from 'prop-types';

import Slider from '../common/Slider';
import TemperatureDegreeIndicator from '../TemperatureDegreeIndicator';

import './WeatherTemperatureFilter.scss'

class WeatherTemperatureFilter extends React.PureComponent {
    onTemperetureSliderChange = (degree) => this.props.setTemperatureFilter({ degree: degree.toFixed(1) });

    render() {
        let { range, value } = this.props;
        if (value == null) {
            value = range.min;
        }
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
    value: propTypes.string,
    setTemperatureFilter: propTypes.func,
}


export default WeatherTemperatureFilter;
import * as React from 'react';
import propTypes from 'prop-types';

import Slider from '../common/Slider';
import Checkbox from '../common/Checkbox';
import TemperatureDegreeIndicator from '../TemperatureDegreeIndicator';

import './WeatherTemperatureFilter.scss'

class WeatherTemperatureFilter extends React.PureComponent {
    onTemperetureSliderChange = (degree) => this.props.setTemperatureFilter({ degree: degree.toFixed(1) });
    switchTemperatureFilter = (value) => this.props.switchTemperatureFilter({ active: value });

    render() {
        let { range, sliderValue, checkboxValue, isSliderActive } = this.props;
        return (
            <div className="WeatherTemperatureFilter">
                <div className="WeatherTemperatureFilter__Label">
                    Show city weather warmer than
                </div>
                <Slider 
                    min={range.min} 
                    max={range.max} 
                    value={sliderValue} 
                    onChange={this.onTemperetureSliderChange}
                    indicator={<TemperatureDegreeIndicator />}
                    disabled={!isSliderActive}
                />
                <Checkbox 
                    onChange={this.switchTemperatureFilter}
                    value={checkboxValue}
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
    sliderValue: propTypes.string,
    checkboxValue: propTypes.bool,
    isSliderActive: propTypes.bool,
    setTemperatureFilter: propTypes.func,
    switchTemperatureFilter: propTypes.func,
}


export default WeatherTemperatureFilter;
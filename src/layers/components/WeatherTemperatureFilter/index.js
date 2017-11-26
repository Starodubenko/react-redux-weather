import { connect } from 'react-redux';
import Presenter from './WeatherTemperatureFilter';
import { getWeatherTemperatureRange, setTemperatureFilter, getDegree, switchTemperatureFilter, isTemperatureFilterActive } from '../../core';

const mapStateToProps = (state, props) => ({
    range: getWeatherTemperatureRange(state),
    sliderValue: getDegree(state),
    checkboxValue: isTemperatureFilterActive(state),
    isSliderActive: isTemperatureFilterActive(state)
})

const mapDispatchToProps = {
    setTemperatureFilter,
    switchTemperatureFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);


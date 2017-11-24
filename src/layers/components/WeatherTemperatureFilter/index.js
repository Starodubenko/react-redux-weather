import { connect } from 'react-redux';
import Presenter from './WeatherTemperatureFilter';
import { getWeatherTemperatureRange, setTemperatureFilter, getDegree } from '../../core';

const mapStateToProps = (state, props) => ({
    range: getWeatherTemperatureRange(state),
    value: getDegree(state),
})

const mapDispatchToProps = {
    setTemperatureFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);


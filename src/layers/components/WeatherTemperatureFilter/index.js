import { connect } from 'react-redux';
import Presenter from './WeatherTemperatureFilter';
import { getWeatherDegreeRange, setTemperatureFilter, getDegree } from '../../core';

const mapStateToProps = (state, props) => ({
    range: getWeatherDegreeRange(state),
    value: getDegree(state),
})

const mapDispatchToProps = {
    setTemperatureFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);


import { connect } from 'react-redux';
import Presenter from './WeatherCardList';

import { getWeather } from '../../core';

const mapStateToProps = (state) => ({
    weatherList: getWeather(state),
})

export default connect(mapStateToProps)(Presenter);


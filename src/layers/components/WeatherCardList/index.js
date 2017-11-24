import { connect } from 'react-redux';
import Presenter from './WeatherCardList';

import { getWeather } from '../../core';

const mapStateToProps = (state) => ({
    cityList: getWeather(state),
})

export default connect(mapStateToProps)(Presenter);


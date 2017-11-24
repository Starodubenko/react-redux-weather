import { connect } from 'react-redux';
import Presenter from './RemoveWeatherButton';
import { startRemoveWeather } from '../../core';

const mapDispatchToProps = {
    removeWeather: startRemoveWeather,
}

export default connect(null, mapDispatchToProps)(Presenter);


import { connect } from 'react-redux';
import Presenter from './RemoveCityButton';
import { removeWeather } from '../../core';

const mapDispatchToProps = {
    removeCity: removeWeather,
}

export default connect(null, mapDispatchToProps)(Presenter);


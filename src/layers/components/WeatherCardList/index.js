import { connect } from 'react-redux';
import Presenter from './WeatherCardList';

import { getSelectedCities } from '../../core';

const mapStateToProps = (state) => ({
    cityList: getSelectedCities(state),
})

export default connect(mapStateToProps)(Presenter);


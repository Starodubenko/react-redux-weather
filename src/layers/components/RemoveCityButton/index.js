import { connect } from 'react-redux';
import Presenter from './RemoveCityButton';
import { startRemoveCity } from '../../core';

const mapDispatchToProps = {
    removeCity: startRemoveCity,
}

export default connect(null, mapDispatchToProps)(Presenter);


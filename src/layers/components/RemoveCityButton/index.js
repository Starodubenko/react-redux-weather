import { connect } from 'react-redux';
import Presenter from './RemoveCityButton';
import { removeCity } from '../../core';

const mapDispatchToProps = {
    removeCity,
}

export default connect(null, mapDispatchToProps)(Presenter);


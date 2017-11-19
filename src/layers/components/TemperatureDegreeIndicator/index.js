import { connect } from 'react-redux';
import Presenter from './TemperatureDegreeIndicator';

import { getDegree } from '../../core';

const mapStateToProps = (state, props) => ({
    value: getDegree(state),
})

export default connect(mapStateToProps)(Presenter);


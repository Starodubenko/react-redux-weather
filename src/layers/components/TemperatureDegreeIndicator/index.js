import { connect } from 'react-redux';
import Presenter from './TemperatureDegreeIndicator';

import { getCurrentDegree } from '../../core';

const mapStateToProps = (state, props) => ({
    value: getCurrentDegree(state),
})

export default connect(mapStateToProps)(Presenter);


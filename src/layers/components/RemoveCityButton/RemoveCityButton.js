import * as React from 'react';
import propTypes from 'prop-types';
import Button from 'material-ui/Button';

import './RemoveCityButton.scss'

export default class RemoveCityButton extends React.Component {
    remove = () => {
        this.props.removeCity({ cityId: this.props.cityId });
    }

    render() {
        return (
            <Button className="RemoveCityButton" onClick={this.remove}>X</Button>
        )
    }
}

RemoveCityButton.propTypes = {
    cityId: propTypes.string,
    removeCity: propTypes.func,
}

RemoveCityButton.defaultProps = {
    removeCity: () => console.log(`Remove city button has been clicked`),
}

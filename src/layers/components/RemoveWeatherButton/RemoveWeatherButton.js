import * as React from 'react';
import propTypes from 'prop-types';
import Button from 'material-ui/Button';

import './RemoveWeatherButton.scss'

export default class RemoveWeatherButton extends React.Component {
    remove = () => {
        this.props.removeWeather({ cityId: this.props.cityId });
    }

    render() {
        return (
            <Button className="RemoveWeatherButton" onClick={this.remove}>X</Button>
        )
    }
}

RemoveWeatherButton.propTypes = {
    cityId: propTypes.number,
    removeWeather: propTypes.func,
}

RemoveWeatherButton.defaultProps = {
    removeWeather: () => console.log(`Remove city button has been clicked`),
}

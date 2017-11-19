import * as React from 'react';
import propTypes from 'prop-types';

import './WeatherCard.scss'

const WeatherCard = ({ cityName, degree, wind, preassure}) => (
    <div className="WeatherCard">
        <div className="WeatherCard__Header">
            {cityName}
        </div>
        <div className="WeatherCard__MainInfo">
            {degree}
        </div>
        <div className="WeatherCard__AdditionalInfo">
            {wind}
            {preassure}
        </div>
    </div>
);

WeatherCard.propTypes = {
    cityName: propTypes.string,
    degree: propTypes.string,
    wind: propTypes.string,
    preassure: propTypes.string

}

export default WeatherCard;
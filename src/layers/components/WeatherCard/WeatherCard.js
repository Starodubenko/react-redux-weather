import * as React from 'react';
import propTypes from 'prop-types';

import './WeatherCard.scss'

const WeatherCard = ({ cityName, degree, wind, preassure, actionComponent }) => (
    <div className="WeatherCard">
        <div className="WeatherCard__Header">
            <div className="WeatherCard__CityName">
                {cityName}
            </div>
            <div className="WeatherCard__Action">
                {actionComponent}
            </div>
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
    degree: propTypes.number,
    wind: propTypes.number,
    preassure: propTypes.number,
    actionComponent: propTypes.node,
}

export default WeatherCard;
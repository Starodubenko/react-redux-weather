import * as React from 'react';
import propTypes from 'prop-types';
import { getCesiumDegree, getWind, getPressure } from '../../utils';

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
            <div className="WeatherCard__WeatherIcon">
                icon
            </div>
            <div className="WeatherCard__WeatherDegree">
                {getCesiumDegree(degree)}
            </div>
        </div>
        <div className="WeatherCard__AdditionalInfo">
            <div className="WeatherCard__AdditionalInfoCell">
                {getWind(wind)}
            </div>
            <div className="WeatherCard__AdditionalInfoCell">
                {getPressure(preassure)}
            </div>
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
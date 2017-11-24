import * as React from 'react';
import propTypes from 'prop-types';
import { getCesiumDegree, getWind, getPressure } from '../../utils';

import './WeatherCard.scss'

const WeatherCard = ({ cityName, temperature, wind, pressure, actionComponent, icon }) => (
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
                <img src={icon} alt="" />
            </div>
            <div className="WeatherCard__WeatherDegree">
                {getCesiumDegree(temperature)}
            </div>
        </div>
        <div className="WeatherCard__AdditionalInfo">
            <div className="WeatherCard__AdditionalInfoCell">
                {getWind(wind)}
            </div>
            <div className="WeatherCard__AdditionalInfoCell">
                {getPressure(pressure)}
            </div>
        </div>
    </div>
);

WeatherCard.propTypes = {
    cityName: propTypes.string,
    temperature: propTypes.number,
    wind: propTypes.number,
    pressure: propTypes.number,
    actionComponent: propTypes.node,
}

export default WeatherCard;
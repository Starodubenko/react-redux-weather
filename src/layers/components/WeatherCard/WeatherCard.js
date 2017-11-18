import * as React from 'react';

import './WeatherCard.scss'

const WeatherCard = ({ message }) => (
    <div className="WeatherCard">
        <div className="WeatherCard__Message">
            {message}
        </div>
    </div>
);

export default WeatherCard;
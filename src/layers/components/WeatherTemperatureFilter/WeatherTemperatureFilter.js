import * as React from 'react';

import './WeatherTemperatureFilter.scss'

const WeatherTemperatureFilter = ({ message }) => (
    <div className="WeatherTemperatureFilter">
        <div className="WeatherTemperatureFilter__Message">
            {message}
        </div>
    </div>
);

export default WeatherTemperatureFilter;
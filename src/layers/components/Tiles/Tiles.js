import * as React from 'react';
import propTypes from 'prop-types';
import WeatherCard from '../WeatherCard';

import './Tiles.scss'

export default class Tiles extends React.Component {
    renderTiles = () => {
        return this.props.weatherList.map(item => (
            <div className="Tiles__Item">
                {item}
            </div>
        ))
    }

    render() {
        return (
            <div className="Tiles">
                {this.renderTiles()}
            </div>
        )
    }
};

Tiles.propTypes = {
    weatherList: propTypes.arrayOf(propTypes.node)
}

Tiles.defaultProps = {
    weatherList: [
        <WeatherCard
            cityName="Astana"
            degree="-10"
            wind="10"
            preassure="700"
        />,
        <WeatherCard
            cityName="Moscow"
            degree="0"
            wind="10"
            preassure="750"
        />,
        <WeatherCard
            cityName="Moscow"
            degree="0"
            wind="10"
            preassure="750"
        />,
        <WeatherCard
            cityName="Moscow"
            degree="0"
            wind="10"
            preassure="750"
        />,
        <WeatherCard
            cityName="Moscow"
            degree="0"
            wind="10"
            preassure="750"
        />,
        <WeatherCard
            cityName="Moscow"
            degree="0"
            wind="10"
            preassure="750"
        />,
    ]
}



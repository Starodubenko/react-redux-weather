import * as React from 'react';
import propTypes from 'prop-types';

import WeatherCard from '../WeatherCard';
import Tiles from '../Tiles';
import RemoveCityButton from '../RemoveCityButton';

import './WeatherCardList.scss'

export default class WeatherCardList extends React.Component {
    renderWeatherCardList = () => {
        return this.props.weatherList.map(item => (
            <WeatherCard
                cityName={item.name}
                degree={item.degree}
                wind={item.wind}
                preassure={item.preassure}
                actionComponent={<RemoveCityButton cityId={item.id} />}
            />
        ))
    }

    render() {
        return (
            <div className="WeatherCardList">
                <Tiles list={this.renderWeatherCardList()}/>
            </div>
        )
    }
};

WeatherCardList.propTypes = {
    weatherList: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        name: propTypes.string,
        degree: propTypes.number,
        wind: propTypes.number,
        pressure: propTypes.number,
    }))
}

WeatherCardList.defaultProps = {
    weatherList: []
}



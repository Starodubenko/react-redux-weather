import * as React from 'react';
import propTypes from 'prop-types';

import WeatherCard from '../WeatherCard';
import Tiles from '../common/Tiles';
import RemoveWeatherButton from '../RemoveWeatherButton';

import './WeatherCardList.scss'

export default class WeatherCardList extends React.Component {
    renderWeatherCardList = () => {
        return this.props.cityList.map(item => (
            <WeatherCard
                cityName={item.name}
                icon={item.conditionIcon}
                temperature={item.temperature}
                wind={item.wind}
                pressure={item.pressure}
                actionComponent={<RemoveWeatherButton cityId={item.id} />}
                key={item.id}
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
    cityList: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
        degree: propTypes.number,
        wind: propTypes.number,
        pressure: propTypes.number,
    }))
}

WeatherCardList.defaultProps = {
    cityList: []
}



import React, {Component} from 'react';
import Header from '../../components/Header';

import WeatherCardList from '../../components/WeatherCardList';
import AutoComplete from '../../components/AutoComplete';
import WeatherTemperatureFilter from '../../components/WeatherTemperatureFilter';
import Button from 'material-ui/Button';

import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__Header">
                    <Header 
                    leftComponent={
                        <div className="WeatherControls">
                            <AutoComplete/>
                            <Button color="primary">Add</Button>
                        </div>
                    }
                    rightComponent={
                        <WeatherTemperatureFilter />
                    }
                    />
                </div>
                <div className="Main__Tiles">
                    <WeatherCardList />
                </div>
            </div>
        );
    }
}
import * as React from 'react';
import propTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { CSSTransitionGroup } from 'react-transition-group'

import WeatherCard from '../../WeatherCard';
import RemoveCityButton from '../../RemoveCityButton';

import './Tiles.scss'

export default class Tiles extends React.Component {
    renderTiles = () => {
        return this.props.list.map((item, index) => (
            <Paper className="Tiles__Item" zdepth={1} key={`Tiles__Item_${index}`}>
                {item}
            </Paper>
        ))
    }

    render() {
        return (
            <div className="Tiles">
                <CSSTransitionGroup
                    transitionName="Tiles"
                    component="div"
                    className="Tiles__Wrapper"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.renderTiles()}
                </CSSTransitionGroup>
            </div>
        )
    }
};

Tiles.propTypes = {
    list: propTypes.arrayOf(propTypes.node)
}

Tiles.defaultProps = {
    list: [
        <WeatherCard
            key="WeatherCard_1"
            cityName="Astana"
            degree={-10}
            wind={10}
            preassure={700}
            actionComponent={<RemoveCityButton />}
        />,
        <WeatherCard
            key="WeatherCard_2"
            cityName="Moscow"
            degree={0}
            wind={10}
            preassure={750}
        />,
    ]
}



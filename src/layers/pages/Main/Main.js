import React, {Component} from 'react';
import Header from '../../components/Header';
import Tiles from '../../components/Tiles';

import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__Header">
                    <Header />
                </div>
                <div className="Main__Tiles">
                    <Tiles />
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react';
import Header from '../../components/Header';
import Tiles from '../../components/Tiles';
import AutoComplete from '../../components/AutoComplete';

import './Main.scss';

export default class Main extends Component {
    render() {
        return (
            <div className="Main">
                <div className="Main__Header">
                    <Header leftComponent={<AutoComplete/>}/>
                </div>
                <div className="Main__Tiles">
                    <Tiles />
                </div>
            </div>
        );
    }
}
import * as React from 'react';
import AutoComplete from '../../components/common/AutoComplete'

import './CityAutoComplete.scss'

export default class CityAutoComplete extends React.Component {
    selectCityHandler = (city) => {
        this.props.selectCity({ city });
    }

    startCityFetchHandler = (cityName) => {
        this.props.startCityFetch({ cityName });
    }

    setValue = (value) => {
        this.props.setValue({ value });
    }

    render () {
        return (
            <AutoComplete
                suggestions={this.props.suggestions}
                value={this.props.value}
                onChange={this.selectCityHandler}
                fetchRequest={this.startCityFetchHandler}
                clearSuggestions={this.props.clearSuggestions}
                setValue={this.setValue}
            />
        )
    }
};
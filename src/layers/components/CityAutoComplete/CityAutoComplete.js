import * as React from 'react';
import AutoComplete from '../../components/common/AutoComplete'
import Button from 'material-ui/Button';

import './CityAutoComplete.scss'

export default class CityAutoComplete extends React.Component {
    selectCityHandler = (cityId) => {
        this.props.selectCity({ value: cityId });
    }

    startCityFetchHandler = (cityName) => {
        this.props.startCityFetch({ cityName });
    }

    addSelectedCity = (cityName) => {
        this.props.addSelectedCity();
        this.autocopleteRef.clearValue();
    }

    returnRef = ref => this.autocopleteRef = ref;

    render () {
        return (
            <div className="CityAutoComplete">
                <AutoComplete
                    suggestions={this.props.suggestions}
                    value={this.props.value}
                    onChange={this.selectCityHandler}
                    fetchRequest={this.startCityFetchHandler}
                    clearSuggestions={this.props.clearSuggestions}
                    returnRef={this.returnRef}
                />
                <Button color="primary" onClick={this.addSelectedCity}>Add</Button>
            </div>
        )
    }
};
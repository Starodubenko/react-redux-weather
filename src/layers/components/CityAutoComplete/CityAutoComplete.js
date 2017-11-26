import * as React from 'react';
import AutoComplete from '../../components/common/AutoComplete'
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import './CityAutoComplete.scss'

export default class CityAutoComplete extends React.Component {
    selectCityHandler = (city) => {
        this.props.selectCity({ value: { id: city.id, name: city.label} });
        setTimeout(() => this.addButtonRef.focus(), 0);
    }

    startCityFetchHandler = (cityName) => {
        this.props.startCityFetch({ cityName });
    }

    addSelectedCity = (cityName) => {
        this.props.addSelectedCity();
        this.autocopleteRef.clearValue();
        setTimeout(() => this.autocopleteRef.focus(), 0);
    }

    returnAutoCompleteRef = ref => this.autocopleteRef = ref;
    returnAddButtonRef = ref => this.addButtonRef = ref;

    render () {
        return (
            <div className="CityAutoComplete">
                <AutoComplete
                    suggestions={this.props.suggestions}
                    value={this.props.value}
                    onChange={this.selectCityHandler}
                    fetchRequest={this.startCityFetchHandler}
                    clearSuggestions={this.props.clearSuggestions}
                    returnRef={this.returnAutoCompleteRef}
                    placeholder="Start typing city name"
                />
                <Button rootRef={this.returnAddButtonRef} color="primary" onClick={this.addSelectedCity}>
                    <AddIcon />
                </Button>
            </div>
        )
    }
};
import { connect } from 'react-redux';
import Presenter from './CityAutoComplete';
import { startCityFetch, selectValue, getSuggestions, clearSuggestions, addSelectedCity } from '../../core';

const mapStateToProps = state => ({
    suggestions: getSuggestions(state),
})

const mapDispatchToProps = {
    startCityFetch,
    selectCity: selectValue,
    clearSuggestions,
    addSelectedCity,
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);


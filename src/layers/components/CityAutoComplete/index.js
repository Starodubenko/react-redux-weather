import { connect } from 'react-redux';
import Presenter from './CityAutoComplete';
import { startCityFetch, selectCity, getSuggestions, clearSuggestions, setValue } from '../../core';

const mapStateToProps = state => ({
    suggestions: getSuggestions(state),
})

const mapDispatchToProps = {
    startCityFetch,
    selectCity,
    clearSuggestions,
    setValue,
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);


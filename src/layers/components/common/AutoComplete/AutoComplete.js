import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { withStyles } from 'material-ui/styles';



function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps;

  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion.label, query);
  const parts = parse(suggestion.label, matches);

  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={index} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={index} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;

  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

function getSuggestionValue(suggestion) {
  return suggestion.label;
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

class IntegrationAutosuggest extends React.Component {
  state = {
    value: '',
  }

  clearValue = () => this.setState({ value: '' });
  focus = () => this.autosuggestRef.focus();

  getSortedSuggestions = () => {
    return this.props.suggestions.sort((valueA, valueB) => {
      const value = this.state.value;
      const a = valueA.label.indexOf(value);
      const b = valueB.label.indexOf(value);
      if (a > b && b !== -1) {
        return 1;
      }
      if (a < b || b === -1) {
        return -1;
      }
      return 0;
    })
  }

  handleSuggestionsFetchRequested = ({ value }) => {
    if (value && this.state.value !== value) {
      this.props.fetchRequest(value);
    }
  };

  handleSuggestionsClearRequested = () => {
    this.props.clearSuggestions();
  };

  handleChange = (event, { newValue }) => {
    this.setState({ value: newValue });
  };

  onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
    this.props.onChange(suggestion);
  }

  componentDidMount() {
    this.props.returnRef(this);
  }

  inputRef = ref => this.autosuggestRef = ref.input;

  render() {
    const { classes } = this.props;
    return (
      <Autosuggest
        ref={this.inputRef}
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        onSuggestionSelected={this.onSuggestionSelected}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        suggestions={this.getSortedSuggestions()}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: this.props.placeholder,
          value: this.state.value,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

IntegrationAutosuggest.propTypes = {
  classes: PropTypes.object,
  fetchRequest: PropTypes.func,
  onChange: PropTypes.func,
  clearSuggestions: PropTypes.func,
  suggestions: PropTypes.any,
  returnRef: PropTypes.func,
  placeholder: PropTypes.string,
};

IntegrationAutosuggest.defaultProps = {
  suggestions: [],
};



export default withStyles(styles)(IntegrationAutosuggest);
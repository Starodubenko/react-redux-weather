import * as React from 'react';
import { MDCCheckbox } from '@material/checkbox';
import propTypes from 'prop-types';

import './Checkbox.scss'

class Checkbox extends React.Component {
    onChange = () => this.props.onChange(this.checkbox.checked);

    componentDidMount() {
        this.checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
        this.checkbox.foundation_.adapter_.registerChangeHandler(this.onChange);
        this.checkbox.checked = this.props.value;
    }

    componentDidUpdate() {
        this.checkbox = new MDCCheckbox(document.querySelector('.mdc-checkbox'));
        this.checkbox.checked = this.props.value;
    }

    render() {
        return (
            <div className="Checkbox">
                <div className="mdc-checkbox">
                    <input type="checkbox"
                             className="mdc-checkbox__native-control"/>
                    <div className="mdc-checkbox__background">
                        <svg className="mdc-checkbox__checkmark"
                             viewBox="0 0 24 24">
                            <path className="mdc-checkbox__checkmark__path"
                                fill="none"
                                stroke="white"
                                d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                        </svg>
                        <div className="mdc-checkbox__mixedmark"></div>
                    </div>
                </div>
            </div>
            )
    }
}

Checkbox.propTypes = {
    value: propTypes.bool,
    onChange: propTypes.func,
}

Checkbox.defaultProps = {
    value: false,
    onChange: (value) => console.log(`Checkbox has been change to ${value}`),
}

export default Checkbox;
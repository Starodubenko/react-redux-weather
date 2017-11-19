import * as React from 'react';
import { MDCSlider } from '@material/slider';
import propTypes from 'prop-types';

import './Slider.scss'

class Slider extends React.Component {
    onChange = () => this.props.onChange(this.slider.value);

    componentDidMount() {
        this.slider = new MDCSlider(document.querySelector('.mdc-slider'));
        this.slider.listen('MDCSlider:input', this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.max !== this.props.max ||
            nextProps.min !== this.props.min) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div className="Slider">
                <div class="mdc-slider" tabindex="0" role="slider"
                aria-valuemin={this.props.min} aria-valuemax={this.props.max} aria-valuenow={this.props.value}
                aria-label="Select Value">
                    <div class="mdc-slider__track-container">
                        <div class="mdc-slider__track"></div>
                    </div>
                    <div class="mdc-slider__thumb-container">
                        <svg class="mdc-slider__thumb" width="21" height="21">
                            <circle cx="10.5" cy="10.5" r="7.875"></circle>
                        </svg>
                        <div class="mdc-slider__focus-ring"></div>
                        {this.props.indicator}
                    </div>
                </div>
            </div>
            )
    }
}

Slider.propTypes = {
    min: propTypes.number,
    max: propTypes.number,
    value: propTypes.number,
    onChange: propTypes.func,
    indicator: propTypes.node,
}

Slider.defaultProps = {
    min: 0,
    max: 100,
    value: 50,
    onChange: (value) => console.log(`Value changed to ${Math.round(value)}`),
}

export default Slider;
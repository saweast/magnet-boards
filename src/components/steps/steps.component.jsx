import React, { Component, Fragment } from 'react';
import './steps.styles.scss';

import Step0 from '../step0/step0.component';
import Step1 from '../step1/step1.component';

export default class Steps extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getStep = () => {
        const { currentStep } = this.props;

        switch (currentStep) {
            case 0: return <Step0 title="Магнітний планер" />;
            case 1: return <Step1 title="Тип сітки" handleType={this.props.handleType} />
            case 2: {
            }
            case 3: {
            }
            case 4: {
            }
            default: {

            }
        }
    }

    render = () => {
        return this.getStep();
    }
}
import React, { Component } from 'react';
import './steps.styles.scss';

import Step0 from '../step0/step0.component';
import Step1 from '../step1/step1.component';
import Step2 from '../step2/step2.component';
import Step3 from '../step3/step3.component';

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
            case 2: return <Step2 title="Фон дошки" handlePicture={this.props.handlePicture} data={this.props.data} />
            case 3: return <Step3 title="Додаткове обладнання" handleStuff={this.props.handleStuff} data={this.props.data} />
            case 4: { break; }
            default: {}
        }
    }

    render = () => {
        return this.getStep();
    }
}
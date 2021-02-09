import React, { Component } from 'react';
import './footer.styles.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.stepsCount = 5;

    this.state = {};
  }

  handleNextStep = () => {
    const { currentStep, picture, type, contactName, contactSocialType, contactValue } = this.props.data;
    let nextStep = undefined;

    switch (currentStep) {
      case 1: {
        if (type) {
          nextStep = currentStep + 1;
          break;
        } else {
          return;
        }
      }
      case 2: {
        if (picture) {
          nextStep = currentStep + 1;
          break;
        } else {
          return;
        }
      }
      case 4: {
        if (contactName && contactSocialType && contactValue) {
          nextStep = currentStep + 1;
          break;
        } else {
          return;
        }
      }
      default: {
        nextStep = currentStep + 1;
      }
    }

    this.props.handleStep(nextStep);
  }

  render = () => {
    const { stepsCount } = this;
    const { currentStep, data } = this.props;

    let buttonTitle = undefined;

    switch (currentStep) {
      case 0: {
        buttonTitle = 'Розпочати';
        break;
      }
      case 5: {
        buttonTitle = 'О, братік';
        break;
      }
      default: {
        buttonTitle = `Сдєдующій ${currentStep}`;
      }
    }

    if (currentStep < stepsCount) {
      return (
          <footer className="footer">
            <div className="action" onClick={ this.handleNextStep }>
              <div className="action__info">
                {currentStep > 0 ? <span className="action__step">Шаг {currentStep} из {stepsCount}</span> : ''}
                {currentStep > 0 ? <span className="action__price">{data.price} грн.</span> : '' }
              </div>
              <span className="action__title">{buttonTitle}</span>
            </div>
        </footer>
      )
    } else {
      return ''
    }
  }
}
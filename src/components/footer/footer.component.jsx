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
          this.props.handleSubmit();
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

  handlePrevStep = () => {
    const { currentStep } = this.props.data;
    let prevStep = currentStep - 1;

    this.props.handleStep(prevStep);
  }

  render = () => {
    const { stepsCount } = this;
    const { currentStep, data } = this.props;
    const { isFilled } = data;

    let buttonTitle = undefined;

    switch (currentStep) {
      case 0: {
        buttonTitle = 'Выбрать доску';
        break;
      }
      case 1: {
        buttonTitle = 'Выбрать изображение';
        break;
      }
      case 2: {
        buttonTitle = 'Выбрать маркеры';
        break;
      }
      case 3: {
        buttonTitle = 'Заказать';
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
          {currentStep >= 1 ? <button className="action__back" onClick={ this.handlePrevStep }></button> : ''}
          <button className={!isFilled ? 'action action--disabled' : 'action'} onClick={ this.handleNextStep }>
            <div className="action__info">
              {currentStep > 0 ? <span className="action__step">Шаг {currentStep} из {stepsCount}</span> : ''}
              {currentStep > 0 ? <span className="action__price">{data.price} грн.</span> : '' }
            </div>
            <span className="action__title">{buttonTitle}</span>
          </button>
        </footer>
      )
    } else {
      return ''
    }
  }
}
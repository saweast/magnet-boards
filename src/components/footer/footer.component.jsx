import React, { Component } from 'react';
import './footer.styles.scss';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.stepsCount = 5;
    this.state = {};
  }

  handleNextStep = () => {
    let nextStep = this.props.currentStep + 1;
    this.props.handleStep(nextStep);
  }

  render = () => {
    const { stepsCount } = this;
    const { currentStep, product } = this.props;

    let buttonTitle = undefined;

    switch (currentStep) {
      case 0: {
        buttonTitle = 'Ну давай';
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

    return (
      <footer className="footer">
        <div className="action" onClick={this.handleNextStep}>
          <div className="action__info">
            <span className="action__step">Шаг {currentStep} из {stepsCount}</span>
            <span className="action__price">{product.price} грн.</span>
          </div>
          <span className="action__title">{buttonTitle}</span>
        </div>
      </footer>
    )
  }
}
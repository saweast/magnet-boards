import React, { Component, Fragment } from 'react';
import './main.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Steps from '../../components/steps/steps.component';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      picture: null,
      type: null,
      red: 1,
      black: 1,
      eraser: 1,
      contactName: '',
      contactSocialType: '',
      contactValue: '',
      price: 0,
    }
  }

  handleStep = (newStep) => {
    this.setState({
      currentStep: newStep,
    });
  }

  handleType = (newType) => {
    this.setState({
      type: newType,
    })
  }

  handlePicture = (newBackground) => {
    this.setState({
      picture: newBackground
    })
  }

  handleStuffOrContact = (name, value) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = () => {
    debugger;
  }

  render() {
    const { currentStep } = this.state;

    return (
      <Fragment>
        <Header />

        <main className="main">
          <Steps
            currentStep={currentStep}
            handleType={this.handleType}
            handlePicture={this.handlePicture}
            handleStuffOrContact={this.handleStuffOrContact}
            data={this.state}
          />
        </main>

        <Footer
          currentStep={currentStep}
          handleStep={this.handleStep}
          data={this.state}
        />
      </Fragment>
    );
  }
}

export default MainPage;
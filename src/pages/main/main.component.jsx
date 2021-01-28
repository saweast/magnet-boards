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
            product: {
                price: 0,
                picture: null,
                type: null,
            },
            picture: null,
            type: null,
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

    handleStuff = (newStuff) => {
        this.setState({
            stuff: newStuff
        })
    }

    render() {
        const { currentStep, product } = this.state;

        return (
            <Fragment>
                <Header />

                <main className="main">
                    <Steps
                        currentStep={currentStep}
                        product={product}
                        handleType={this.handleType}
                        handlePicture={this.handlePicture}
                        handleStuff={this.handleStuff}
                        data={this.state}
                    />
                </main>

                <Footer
                    currentStep={currentStep}
                    handleStep={this.handleStep}
                    product={product}
                />
            </Fragment>
        );
    }
}

export default MainPage;
import React, { Component, Fragment } from 'react';
import './main.styles.scss';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import Steps from '../../components/steps/steps.component';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

class MainPage extends Component {
    constructor(props) {
        super(props);

        this.backgrounds = [
            {
                image: 'custom',
                price: 250,
            },
            {
                image: image1,
                price: 50,
            },
            {
                image: image2,
                price: 100,
            },
            {
                image: image3,
                price: 75,
            }
        ]

        this.state = {
            currentStep: 0,
            product: {
                price: 0,
                type: null,
                picture: null,
            },
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
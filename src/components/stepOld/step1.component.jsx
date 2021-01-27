import React, { Component } from 'react';
import ImageUploader from 'react-images-upload';

import './step1.styles.scss';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

class Step1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            step: 0,
            price: 300,
            type: '',
            picture: '',
            allSteps: 5,
        }
    }

    handleStepChange = (newStep) => {
        this.setState({
            step: newStep,
        })
    }

    handleTypeChange = (event) => {
        this.setState({
            type: event.currentTarget.value
        })
    }

    handleImageUpload = (pictureFiles, pictureDataURLs) => {
        this.setState({
            picture: pictureDataURLs[0]
        }, () => {
            console.log(this.picture);
        });
    }

    handleBackgroundChange = (event) => {
        this.setState({
            picture: event.currentTarget.value
        }, () => {
            console.log(this.picture);
        })
    }

    render() {
        const { step, allSteps, type, price, picture } = this.state;
        const { handleStepChange, handleTypeChange, handleBackgroundChange, handleImageUpload } = this;
        return (
            <React.Fragment>
                {step === 2 ? (<div>
                    <article className="content">
                        <h1 className="content__title">Фон дошки</h1>

                        <section className="type type--background">

                            <ImageUploader
                                withIcon={true}
                                buttonText='Завантажте ваше зображення'
                                onChange={handleImageUpload}
                                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                maxFileSize={5242880}
                                singleImage={true}
                                withPreview={true}
                            />


                            <input
                                value={image1}
                                type="radio"
                                name="type"
                                id="apple"
                                onChange={handleBackgroundChange}
                            />
                            <label className="type__wrapper" checked htmlFor="apple">
                                <img className="type__image" src={image1} alt="apple" />
                                <img className="type__image type__image--grid" src={type} alt="apple" />
                            </label>

                            <input
                                value={image2}
                                type="radio"
                                name="type"
                                id="banana"
                                onChange={handleBackgroundChange}
                            />
                            <label className="type__wrapper" htmlFor="banana">
                                <img className="type__image" src={image2} alt="banana" />
                                <img className="type__image type__image--grid" src={type} alt="apple" />
                            </label>

                            <input
                                value={image3}
                                type="radio"
                                name="type"
                                id="berry"
                                onChange={handleBackgroundChange}
                            />
                            <label className="type__wrapper" htmlFor="berry">
                                <img className="type__image" src={image3} alt="berry" />
                                <img className="type__image type__image--grid" src={type} alt="apple" />
                            </label>
                        </section>
                    </article>

                    
                </div>) : ``}

                {step === 3 ? (<div>
                    <article className="content">
                        <h1 className="content__title">Додаткове обладнання</h1>

                        <section className="type type--background">
                            <label className="type__wrapper" htmlFor="banana">
                                <img className="type__image" src={picture} alt="banana" />
                                <img className="type__image type__image--grid" src={type} alt="apple" />
                            </label>
                        </section>
                    </article>

                    
                </div>) : ``}

            </React.Fragment>

        );
    }

}

export default Step1;
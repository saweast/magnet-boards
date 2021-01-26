import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';

import './step1.styles.scss';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import type1 from './type1.png';
import type2 from './type2.png';

class Step1 extends React.Component {

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
                <header className="header">
                    {/* will insert logo and something more */}
                </header>

                {step === 0 ? (<div>
                    <article className="content">
                        <h1 className="content__title">Магнітний планер</h1>
                        <div className="content__banner">
                            <img className="content__bannerImage" src={ image1 } alt=""/>
                        </div>

                        <p className="content__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, excepturi dolores. Incidunt commodi voluptates architecto culpa similique corrupti officia voluptatibus eligendi totam eveniet! Quidem unde incidunt ex eligendi, aperiam eaque.</p>

                        <div className="content__slider">
                            <div className="slide">
                                <img className="slide__image" src={ image2 } alt=""  />
                            </div>
                            <div className="slide">
                                <img className="slide__image" src={ image3 } alt=""  />
                            </div>
                        </div>

                        <p className="content__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, excepturi dolores. Incidunt commodi voluptates architecto culpa similique corrupti officia voluptatibus eligendi totam eveniet! Quidem unde incidunt ex eligendi, aperiam eaque.</p>

                    </article>

                    <footer className="footer">
                        <div className="action action__step1" onClick={() => handleStepChange(1)}>
                            <span className="action__title">Зконфігурувати {step}</span>
                        </div>
                    </footer>
                </div>) : ``}

                {step === 1 ? (<div>
                    <article className="content">
                        <h1 className="content__title">Тип сітки</h1>
                        <section className="type">
                            <input
                                value={type1}
                                type="radio"
                                name="type"
                                id="type1"
                                onChange={handleTypeChange}
                            />
                            <label className="type__wrapper" checked htmlFor="type1">
                                <h3 className="type__title">Type 1</h3>
                                <img className="type__image" src={type1} alt="Type 1" />
                            </label>

                            <input
                                value={type2}
                                type="radio"
                                name="type"
                                id="type2"
                                onChange={handleTypeChange}
                            />
                            <label className="type__wrapper" htmlFor="type2">
                                <h3 className="type__title">Type 2</h3>
                                <img className="type__image" src={type2} alt="Type 2" />
                            </label>

                            <input
                                value={image3}
                                type="radio"
                                name="type"
                                id="type3"
                                onChange={handleTypeChange}
                            />
                            <label className="type__wrapper" htmlFor="type3">
                                <h3 className="type__title">Type 3</h3>
                                <img className="type__image" src={image3} alt="Type 3" />
                            </label>
                        </section>
                    </article>

                    <footer className="footer">
                        <div className="action action__step2" onClick={() => handleStepChange(2)}>
                            <div className="action__info">
                                <span className="action__step">Шаг {step} из {allSteps}</span>
                            </div>
                            <span className="action__title">Зконфігурувати {step}</span>
                        </div>
                    </footer>
                </div>) : ``}

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

                    <footer className="footer">
                        <div className="action action__step2" onClick={() => handleStepChange(3)}>
                            <div className="action__info">
                                <span className="action__step">Шаг {step} из {allSteps}</span>
                                <span className="action__price">{price} грн.</span>
                            </div>
                            <span className="action__title">Зконфігурувати {step}</span>
                        </div>
                    </footer>
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

                    <footer className="footer">
                        <div className="action action__step2" onClick={() => handleStepChange(3)}>
                            <div className="action__info">
                                <span className="action__step">Шаг {step} из {allSteps}</span>
                                <span className="action__price">{price} грн.</span>
                            </div>
                            <span className="action__title">Зконфігурувати {step}</span>
                        </div>
                    </footer>
                </div>) : ``}

            </React.Fragment>

        );
    }

}

export default Step1;
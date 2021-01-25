import React, {useState} from 'react';
import './step1.styles.scss';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

const Step1 = () => {
    const allSteps = 5;

    const [step, setStep] = useState(0);
    const [price, setPrice] = useState(300);

    const [type, setType] = useState('type 1');
    const [background, setBackground] = useState('apple');

    const handleStepChange = (newStep) => {
        setStep(newStep);
    }

    const handleTypeChange = (event) => {
        setType(event.currentTarget.value);
    }

    const handleBackgroundChange = (event) => {
        setType(event.currentTarget.value);
    }

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
                            <img className="slide__image" src={ image2 } alt="" srcset="" />
                        </div>
                        <div className="slide">
                            <img className="slide__image" src={ image3 } alt="" srcset="" />
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
                            value='type 1'
                            type="radio"
                            name="type"
                            id="type1"
                            onChange={handleTypeChange}
                        />
                        <label className="type__wrapper" checked htmlFor="type1">
                            <h3 className="type__title">Type 1</h3>
                            <img className="type__image" src={image1} alt="Type 1" />
                        </label>

                        <input
                            value='type 2'
                            type="radio"
                            name="type"
                            id="type2"
                            onChange={handleTypeChange}
                        />
                        <label className="type__wrapper" htmlFor="type2">
                            <h3 className="type__title">Type 2</h3>
                            <img className="type__image" src={image2} alt="Type 2" />
                        </label>

                        <input
                            value='type 3'
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
                        <input
                            value='apple'
                            type="radio"
                            name="type"
                            id="apple"
                            onChange={handleBackgroundChange}
                        />
                        <label className="type__wrapper" checked htmlFor="apple">
                            <img className="type__image" src={image1} alt="apple" />
                        </label>

                        <input
                            value='banana'
                            type="radio"
                            name="type"
                            id="banana"
                            onChange={handleBackgroundChange}
                        />
                        <label className="type__wrapper" htmlFor="banana">
                            <img className="type__image" src={image2} alt="banana" />
                        </label>

                        <input
                            value='berry'
                            type="radio"
                            name="type"
                            id="berry"
                            onChange={handleBackgroundChange}
                        />
                        <label className="type__wrapper" htmlFor="berry">
                            <img className="type__image" src={image3} alt="berry" />
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

export default Step1;
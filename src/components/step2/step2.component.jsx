import React, { Component, Fragment } from 'react';
import './step2.styles.scss';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

import ImageUploader from 'react-images-upload';

export default class Step2 extends Component {
    constructor(props) {
        super(props);

        this.backgrounds = [
            {
                id: 1,
                image: image1,
                price: 50,
            },
            {
                id: 2,
                image: image2,
                price: 100,
            },
            {
                id: 3,
                image: image3,
                price: 75,
            }
        ];

        this.state = {
        };
    }

    handlePictureUpload = (pictureFiles, pictureDataURLs) => {
        this.props.handlePicture({
            id: 0,
            image: pictureDataURLs[0],
            price: 250,
        });
    }

    handlePictureChange = (event) => {
        const { backgrounds } = this;
        const selectedBackground = backgrounds.filter((background) => background.id === +event.currentTarget.value);

        this.props.handlePicture(selectedBackground[0]);
    }

    render = () => {
        const { backgrounds } = this;

        return (
            <Fragment>
                <article className="content">
                    <h1 className="content__title">Фон дошки</h1>

                    <section className="type type--background">
                        <ImageUploader
                            withIcon={true}
                            buttonText='Завантажте ваше зображення'
                            onChange={this.handlePictureUpload}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            singleImage={true}
                            withPreview={true}
                        />

                        {backgrounds.map((background, index) => {
                            const { id, image, price } = background;
                            return (
                                <Fragment key={id}>
                                    <input
                                        value={id}
                                        type="radio"
                                        name="type"
                                        id={id}
                                        onChange={this.handlePictureChange}
                                    />
                                    <label className="type__wrapper" checked htmlFor={id}>
                                        <img className="type__image" src={image} alt={`${id} background`} />
                                        <img className="type__image type__image--grid" src={this.props.data.type.image} alt="apple" />
                                    </label>
                                </Fragment>
                            );
                        })}
                    </section>
                </article>
            </Fragment>
        )
    }
};

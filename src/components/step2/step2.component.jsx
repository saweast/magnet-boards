import React, { Component, Fragment } from 'react';
import './step2.styles.scss';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

import { ImageCropper } from "react-bootstrap-image-cropper";

import "bootstrap/dist/css/bootstrap.min.css";
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
            selected: 1,
        };

        this.fileRef = React.createRef();
    }

    handlePictureUpload = (pictureFiles, pictureDataURLs) => {
        this.props.handlePicture({
            id: 0,
            image: pictureDataURLs[0],
            price: 250,
        });

        this.setState({
            selected: 0
        });
    }

    handlePictureChange = (event) => {
        const { backgrounds } = this;
        const selectedBackground = backgrounds.filter((background) => background.id === +event.currentTarget.value);

        this.setState({
            selected: selectedBackground[0].id
        });

        this.props.handlePicture(selectedBackground[0]);
        this.fileRef.current = null;
    }

    handleChange = (croppedFile) => {
        if (!croppedFile) return;

        const reader = new FileReader();
        reader.readAsDataURL(croppedFile);
        reader.onloadend = () => {
            var base64data = reader.result;

            this.props.handlePicture({
                id: 0,
                image: base64data,
                price: 250,
            });

            this.setState({
                selected: 0
            });
        }
    }

    render = () => {
        const { backgrounds } = this;

        return (
            <Fragment ref={this.ref}>
                <article className="content">
                    <h1 className="content__title">Фон дошки</h1>

                    <section className="type type--background">

                        <div className={`type__wrapper ${0 === +this.state.selected ? 'checked' : ''}`}>
                            <ImageCropper
                                fileRef={this.fileRef}
                                onChange={this.handleChange}
                                outputOptions={{ mimeType: 'image/png' }}
                                previewOptions={{ children: 'Обрати зображення' }}
                            />
                        </div>

                        {backgrounds.map((background, index) => {
                            const { id, image, price } = background;
                            const isChecked = +id === +this.state.selected ? true : false;
                            return (
                                <Fragment key={id}>
                                    <input
                                        value={id}
                                        type="radio"
                                        name="type"
                                        id={id}
                                        checked={isChecked}
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

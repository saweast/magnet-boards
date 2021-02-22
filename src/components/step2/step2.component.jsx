import React, { Component, Fragment } from 'react';
import './step2.styles.scss';

import { ImageCropper } from "react-bootstrap-image-cropper";

import "bootstrap/dist/css/bootstrap.min.css";



export default class Step2 extends Component {
  constructor(props) {
    super(props);

    this.backgrounds = [
      {
        id: 1,
        image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fbg1.png?alt=media',
        price: 50,
      },
      {
        id: 2,
        image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fbg2.png?alt=media',
        price: 100,
      },
      {
        id: 3,
        image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fbg3.png?alt=media',
        price: 75,
      }
    ];

    this.state = {
      selected: 1,
    };

    this.fileRef = React.createRef();
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
              return (
                <Fragment key={id}>
                  <input
                    value={id}
                    type="radio"
                    name="type"
                    id={id}
                    onChange={this.handlePictureChange}
                  />
                  <label className="type__wrapper" htmlFor={id}>
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

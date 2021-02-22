import React, { Component, Fragment } from 'react';
import './step1.styles.scss';

import RadioType from '../radioType/radioType.component';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        {
          id: 1,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid01.png?alt=media',
          name: 'Вариант Адын',
          price: 300,
        },
        {
          id: 2,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid02.png?alt=media',
          name: 'Вариант Дыва',
          price: 350,
        },
        {
          id: 3,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid03.png?alt=media',
          name: 'Вориант три',
          price: 350,
        }
      ]
    };
  }

  handleChange = (event) => {
    const { types } = this.state;
    const selectedType = types.filter((type) => type.id === +event.currentTarget.value);

    this.props.handleType(selectedType[0]);
  }

  render = () => {
    const { title } = this.props;
    const { types } = this.state;

    return (
      <Fragment>
        <article className="content">
          <h1 className="content__title">{title}</h1>
          <section className="type">
            {types.map((type, index) => {
              return <RadioType key={index} {...type} handleChange={this.handleChange} />
            })}
          </section>
        </article>
      </Fragment>
    );
  }
}
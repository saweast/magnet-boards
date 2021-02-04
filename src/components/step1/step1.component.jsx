import React, { Component, Fragment } from 'react';
import './step1.styles.scss';

import RadioType from '../radioType/radioType.component';

import type1 from './type1.png';
import type2 from './type2.png';

export default class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        {
          id: 1,
          image: type1,
          name: 'Да',
          price: 300,
        },
        {
          id: 2,
          image: type2,
          name: 'Ні',
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
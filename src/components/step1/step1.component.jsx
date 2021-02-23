import React, { Component, Fragment } from 'react';
import './step1.styles.scss';

import RadioType from '../radioType/radioType.component';

 class Step1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [
        {
          id: 1,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid01.png?alt=media',
          name: 'Список дел',
          price: 300,
        },
        {
          id: 2,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid02.png?alt=media',
          name: 'Список дел + трекер привычек',
          price: 350,
        },
        {
          id: 3,
          image: 'https://firebasestorage.googleapis.com/v0/b/magnet-boards.appspot.com/o/defaults%2Fgrid03.png?alt=media',
          name: 'Трекер привычек',
          price: 350,
        }
      ]
    };
  }

  handleChange = (event) => {
    const { types } = this.state;
    const selectedType = types.find((type) => type.id === +event.currentTarget.value);

    this.props.handleType(selectedType);
  }

  render = () => {
    const { title } = this.props;
    const { types } = this.state;

    console.log('RENDER')

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

 export default React.memo(Step1)
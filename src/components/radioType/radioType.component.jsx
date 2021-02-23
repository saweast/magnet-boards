import React, { Component, Fragment } from 'react';
import './radioType.styles.scss';

export default class RadioType extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render = () => {
    const { image, name, price, id } = this.props;

    return (
      <Fragment>
        <div style={{ position: 'relative' }}>
          <input
            value={id}
            type="radio"
            name="type"
            id={id}
            onChange={this.props.handleChange}
          />
          <label className="type__wrapper" htmlFor={id}>
            <h3 className="type__title">{name}</h3>
            <img className="type__image" src={image} alt={name} />
          </label>
        </div>
      </Fragment>
    );
  }
}
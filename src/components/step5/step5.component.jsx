import React, { Component, Fragment } from 'react';
import './step5.styles.scss';

export default class Step5 extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render = () => {
    const { contactName } = this.props.data;
    return (
      <div className="thankyou">
        <h2>{contactName} дякуємо за звернення!</h2>
        <h3>Ми за вами звяжемося для уточнення деталей</h3>
      </div>
    );
  }
}
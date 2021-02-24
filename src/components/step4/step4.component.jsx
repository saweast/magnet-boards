import React, { Component, Fragment } from 'react';
import './step4.styles.scss';

export default class Step4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contactName: '',
      contactSocialType: '',
      contactValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    }, this.props.handleStuffOrContact(event.currentTarget.name, event.currentTarget.value))
  }

  render = () => {
    const { title } = this.props;
    const { type, picture, red, black, eraser } = this.props.data;
    const { contactName, contactValue, contactSocialType } = this.state;

    return (
      <article className="content">
        <h1 className="content__title">{title}</h1>

        <section className="boardPreview">
          <img className="boardPreview__image" src={picture.image} alt="" />
          <img className="boardPreview__grid" src={type.image} alt="" />
        </section>

        <section className="stuff__list">
          { red ? <div className="stuff">
            Червоний маркер - {red}
          </div> : '' }
          { black ? <div className="stuff">
            Чорний маркер - {black}
          </div> : '' }
          { eraser ? <div className="stuff">
            Гумка - {eraser}
          </div> : '' }
        </section>

        <section className="contactData">
          <label htmlFor="contactName">Ваше ім'я</label>
          <input type="text" id="contactName" name="contactName" placeholder="Дориан" defaultValue={contactName} onChange={ this.handleChange }/>

          <label>Тип зв'язку</label>
          <div className="radioWrapper">
            <input type="radio" name="contactSocialType" value="telegram" onChange={ this.handleChange } />
            <input type="radio" name="contactSocialType" value="viber" onChange={ this.handleChange } />
            <input type="radio" name="contactSocialType" value="phone" onChange={ this.handleChange } />
          </div>

          {contactName && contactSocialType ?
            <Fragment>
              <label htmlFor="contactValue">Ваш контакт</label>
              <input type="text" id="contactValue" name="contactValue" placeholder="@handle or +380123" defaultValue={contactValue} onChange={ this.handleChange }/>
            </Fragment>
          : '' }
        </section>
      </article>
    );
  }
}
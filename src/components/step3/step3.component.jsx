import React, { Component } from 'react';
import './step3.styles.scss';

export default class Step3 extends Component {
  constructor(props) {
    super(props);

    this.items = {
      markers: [
        {
          color: 'червоний',
          id: 'red',
        },
        {
          color: 'помаранчевий',
          id: 'orange',
        },
        {
          color: 'білий',
          id: 'white',
        },
      ],
      erasers: [
        {
          color: 'Витирачка',
          id: 'eraser',
        },
      ]
    }

    this.state = {
      red: 1,
      orange: 1,
      white: 1,
      eraser: 1,
    }
  }

  handleChange = (object, value) => {
    if (0 >= +value) {
      this.setState({
        [object]: 0
      })
    } else if (3 <= +value) {
      this.setState({
        [object]: 3
      })
    } else {
      this.setState({
        [object]: value
      })
    }
  }

  render = () => {
    const { title } = this.props;
    const { type, picture } = this.props.data;
    const { markers, erasers } = this.items;

    return (
      <article className="content">
        <h1 className="content__title">{title}</h1>

        <section className="boardPreview">
          <img className="boardPreview__image" src={picture.image} alt="" />
          <img className="boardPreview__grid" src={type.image} alt="" />
        </section>

        <section className="boardAdditional">
          <div className="boardAdditional__group">
            <h3 className="boardAdditional__groupTitle">Маркери</h3>
            <div className="boardAdditional__list">

              {markers.map((marker, index) => {
                return (
                  <div className="boardAdditional__item item" key={index}>
                    <h4 className="item__color">{marker.color}</h4>
                    <div className="item__numberWrapper">
                      <button className="decrease" onClick={() => { this.handleChange(marker.id, this.state[marker.id] - 1) }}>-</button>
                      <input readOnly name="Color" type="number" className="item__numberInput" value={+this.state[marker.id]} />
                      <button className="increase" onClick={() => { this.handleChange(marker.id, this.state[marker.id]+1) }}>+</button>
                    </div>
                  </div>
                )
                }
              )}
            </div>
          </div>
          <div className="boardAdditional__group">
            <h3 className="boardAdditional__groupTitle">Гумка</h3>
            <div className="boardAdditional__list">

              {erasers.map((eraser, index) => {
                return (
                  <div className="boardAdditional__item item" key={index}>
                    <h4 className="item__color">{eraser.color}</h4>
                    <div className="item__numberWrapper">
                      <button className="decrease" onClick={() => { this.handleChange(eraser.id, this.state[eraser.id] - 1) }}>-</button>
                      <input readOnly name="Color" type="number" className="item__numberInput" value={+this.state[eraser.id]} />
                      <button className="increase" onClick={() => { this.handleChange(eraser.id, this.state[eraser.id]+1) }}>+</button>
                    </div>
                  </div>
                )
                }
              )}

              
            </div>
          </div>
        </section>
      </article>
    );
  }
}

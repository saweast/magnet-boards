import React, { Component } from 'react';
import './step3.styles.scss';

export default class Step3 extends Component {
    constructor(props) {
        super(props);

        this.items = {
            markers: [
                {
                    color: 'червоний',
                    min: '1',
                    default: '1',
                    max: '4',
                },
                {
                    color: 'помаранчевий',
                    min: '1',
                    default: '1',
                    max: '4',
                },
                {
                    color: 'white',
                    min: '0',
                    default: '0',
                    max: '4',
                },
            ],
            erasers: [
                {
                    color: 'червоний',
                    min: '1',
                    default: '1',
                    max: '4',
                },
            ]
        }

        this.state = {

        }
    }

    render = () => {
        const { title } = this.props;
        const { type, picture } = this.props.data;

        return (
            <article className="content">
                <h1 className="content__title">{ title }</h1>

                <section className="boardPreview">
                    <img className="boardPreview__image" src={picture.image} alt=""/>
                    <img className="boardPreview__grid" src={type.image} alt=""/>
                </section>

                <section className="boardAdditional">
                    <div className="boardAdditional__group">
                        <h3 className="boardAdditional__groupTitle">Маркери</h3>
                        <div className="boardAdditional__list">
                            <div className="boardAdditional__item item">
                                <h4 className="item__color">Color</h4>
                                <div className="item__numberWrapper">
                                    <button className="decrease" onClick={() => {}}>-</button>
                                    <input readOnly name="Color" type="number" className="item__numberInput" min="1" max="5" defaultValue="0" />
                                    <button className="increase" onClick={() => {}}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        );
    }
}

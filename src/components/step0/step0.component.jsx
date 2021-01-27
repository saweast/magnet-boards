import React, { Component, Fragment } from 'react';
import './step0.styles.scss';

import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';

export default class Step0 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        const { title } = this.props;
        return (
            <Fragment>
                <article className="content">
                    <h1 className="content__title">{ title }</h1>
                    <div className="content__banner">
                        <img className="content__bannerImage" src={ image1 } alt=""/>
                    </div>

                    <p className="content__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, excepturi dolores. Incidunt commodi voluptates architecto culpa similique corrupti officia voluptatibus eligendi totam eveniet! Quidem unde incidunt ex eligendi, aperiam eaque.</p>

                    <div className="content__slider">
                        <div className="slide">
                            <img className="slide__image" src={ image2 } alt=""  />
                        </div>
                        <div className="slide">
                            <img className="slide__image" src={ image3 } alt=""  />
                        </div>
                    </div>

                    <p className="content__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, excepturi dolores. Incidunt commodi voluptates architecto culpa similique corrupti officia voluptatibus eligendi totam eveniet! Quidem unde incidunt ex eligendi, aperiam eaque.</p>
                </article>
            </Fragment>
        )
    }
}
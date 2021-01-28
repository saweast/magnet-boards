import React, { Component } from 'react';
import './step3.styles.scss';

export default class Step1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render = () => {
        const { title } = this.props;
        const { type, picture } = this.props.data;

        return (
            <article className="content">
                <h1 className="content__title">{ title }</h1>

                <section className="type type--background">
                    <label className="type__wrapper" htmlFor="banana">
                        <img className="type__image" src={ picture.image } alt={ picture.id } />
                        <img className="type__image type__image--grid" src={ type.image } alt={ type.id } />
                    </label>
                </section>
            </article>
        );
    }
}

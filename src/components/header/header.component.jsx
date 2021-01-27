import React, { Component, Fragment } from 'react';
import './header.styles.scss';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        return (
            <header className="header">
                {/* will insert logo and something more */}
            </header>
        )
    }
}
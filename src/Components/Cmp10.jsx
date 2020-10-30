import React, { Component } from 'react';
import context from '../Context/index';

class Cmp10 extends Component {
    static contextType = context;

    render() {
        return <div>{this.context}</div>;
    }
}

export default Cmp10;

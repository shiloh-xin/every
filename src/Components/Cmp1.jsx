import React, { Component } from 'react';

class Cmp1 extends Component {
    render() {
        return <div>{this.props.children.replace(/x/i, '邓紫棋')}</div>;
        // return <div></div>;
    }
}

export default Cmp1;

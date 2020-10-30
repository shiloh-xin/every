import React, { Component } from 'react';

class Cmp7 extends Component {
    state = {
        msg: 'hello world',
    };

    constructor(props) {
        super(props);
        this.changeMsg = this.changeMsg.bind(this);
    }

    render() {
        return <div>{this.state.msg}</div>;
    }

    changeMsg(msg) {
        this.setState(() => {
            // msg来自于父组件
            console.log(msg);
            return {
                msg: msg,
            };
        });
    }
}

export default Cmp7;

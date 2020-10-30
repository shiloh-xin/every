import React, { Component } from 'react';
import context from '../Context/index';
let { Consumer } = context;

class Cmp9 extends Component {
    render() {
        return (
            <div>
                <Consumer>
                    {value => {
                        return <div>获取的商品是：{value}</div>;
                    }}
                </Consumer>
            </div>
        );
    }
}

export default Cmp9;

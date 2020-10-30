import React, { Component } from 'react';

function Cmp3(props) {
    return <div>个性签名是：{props.sign}</div>;
}

Cmp3.defaultProps = {
    sign: '这个家伙很懒，什么都没有留下',
};

// class Cmp3 extends Component {
//     // 默认值
//     static defaultProps = {
//         sign: '这个家伙很懒，什么都没有留下',
//     };

//     render() {
//         return <div>个性签名：{this.props.sign}</div>;
//     }
// }

export default Cmp3;

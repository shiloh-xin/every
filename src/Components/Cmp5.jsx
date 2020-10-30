import React, { Component } from 'react';

class Cmp5 extends Component {
    render() {
        console.log('Cmp5被渲染了');
        return <div>父亲传递过来的值a为：{this.props.a}</div>;
    }

    shouldComponentUpdate(nextProps, nextState) {
        // 判断是否需要被渲染，如果需要则返回true，否则返回false
        // console.log(nextProps); //最新的props的内容
        // console.log(nextState); //当前state的内容
        if (nextProps.a === this.props.a) {
            return false;
        } else {
            return true;
        }
    }
}

export default Cmp5;

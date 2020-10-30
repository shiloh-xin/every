import React, { PureComponent } from 'react';

class Cmp6 extends PureComponent {
    render() {
        console.log('Cmp6被渲染了');
        return <div>父亲传递过来的值b为：{this.props.b}</div>;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // 判断是否需要被渲染，如果需要则返回true，否则返回false
    //     // console.log(nextProps); //最新的props的内容
    //     // console.log(nextState); //当前组件state的内容

    //     //nextProps.b是最新b的值，this.props.b是原先b的值
    //     // 比较的时候需要使用全等运算符
    //     if (nextProps.b === this.props.b) {
    //         return false;
    //     } else {
    //         return true;
    //     }
    // }
}

export default Cmp6;

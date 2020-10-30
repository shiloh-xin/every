import React, { Component } from 'react';

class Cmp4 extends Component {
    state = {
        num: 0,
    };

    render() {
        return <div>当前的num是：{this.state.num}</div>;
    }
    // 第2个生命周期：从props中获取数据，绑定到当前的这个组件中的state
    static getDerivedStateFromProps(nextProps, prevState) {
        // 返回数据(返回null表示不需要更新state，返回合法的对象则表示更新state)
        // console.log(nextProps); // 父组件传递过来的整个props对象
        // console.log(prevState); // 当前组件中的状态对象state
        if (nextProps.amount === prevState.num) {
            // 不需要更新当前state
            return null;
        } else {
            return { num: nextProps.amount };
        }
    }
}

export default Cmp4;

// 父 -- 子
import React, { Component, createRef } from 'react';
import Cmp7 from './Components/Cmp7';

class App15 extends Component {
    constructor(props) {
        super(props);
        // 创建ref对象,用于控制子组件
        this.child = createRef();
    }

    state = {
        xiaoxi: '两岸进入准战争状态？',
    };

    render() {
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>
                    控制子组件
                </button>
                <hr />
                <Cmp7 ref={this.child}></Cmp7>
            </div>
        );
    }

    clickHandler() {
        // 获取子组件的state中的msg（子 -- 父）
        console.log(this.child.current.state.msg);
        // 调用子组件的changMsg方法，设置新的msg（父 -- 子）
        this.child.current.changeMsg(this.state.xiaoxi);
    }
}

export default App15;

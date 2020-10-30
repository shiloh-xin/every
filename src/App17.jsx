import React, { Component } from 'react';
import Cmp9 from './Components/Cmp9';
import Cmp10 from './Components/Cmp10';

// 作为卖方
import context from './Context/index';
let { Provider } = context;

class App17 extends Component {
    // 存放所有商品的位置
    state = {
        shangpin1: '小米pro100',
        shangpin2: '华为p100 pro plus',
    };

    render() {
        return (
            <div>
                <Provider value={this.state.shangpin1}>
                    {/* 如果Cmp9、Cmp10中海油子组件需要获取这个商品，不建议在这里套娃 */}
                    <Cmp9></Cmp9>
                    <Cmp10></Cmp10>
                </Provider>
            </div>
        );
    }
}

export default App17;

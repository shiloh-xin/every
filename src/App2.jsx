import React, { Component } from 'react';

// 导入子组件Item
import Item from './Components/item';

class App extends Component {
    render() {
        return <Item next="壁立千仞无欲则刚" name="林则徐"></Item>;
    }
}

export default App;

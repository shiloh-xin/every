import React, { Component } from 'react';

import Cmp1 from './Components/Cmp1';

class App7 extends Component {
    state = {
        msg: 'x你好，晚上一起睡觉',
    };

    render() {
        return <Cmp1 msg={this.state.msg}>{this.state.msg}</Cmp1>;
    }
}

export default App7;

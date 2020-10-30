import React, { Component } from 'react';
import Cmp2 from './Components/Cmp2';

class App8 extends Component {
    state = {
        flag: true,
        num: '1234',
    };

    render() {
        return <Cmp2 flag={this.state.flag} num={this.state.num}></Cmp2>;
    }
}

export default App8;

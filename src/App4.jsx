import React, { Component } from 'react';

class App4 extends Component {
    // this方法1
    // 构造函数
    // constructor(props) {
    //     super(props);
    //     // 对this的绑定
    //     this.clickHandler = this.clickHandler.bind(this);
    // }

    // this方法4
    clickHandler = () => {
        console.log(this);
    };

    render() {
        // this方法2
        // return <button onClick={this.clickHandler.bind(this)}>三个字</button>;

        // this方法3
        // return (
        //     <button
        //         onClick={() => {
        //             this.clickHandler();
        //         }}
        //     >
        //         三个字
        //     </button>
        // );

        return <button onClick={this.clickHandler}>三个字</button>;
    }
}

export default App4;

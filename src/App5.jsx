import React, { Component } from 'react';

class App5 extends Component {
    // state方式1：通过构造函数的形式
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cityId: 0,
    //         count: 0,
    //     };
    // }

    // state方式2：常规方式
    state = {
        cityId: 10010,
        count: 10086,
    };

    render() {
        // return <div>{this.state.cityId}</div>;

        return (
            <div>
                {this.state.count}
                <br />
                {this.state.cityId}
            </div>
        );
    }
}

export default App5;

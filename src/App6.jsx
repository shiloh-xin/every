import React, { Component } from 'react';

class App6 extends Component {
    // 声明状态
    state = {
        count: 0,
    };

    render() {
        return (
            <div>
                <button onClick={this.clickHandler.bind(this)}>+1</button>
                {this.state.count}
            </div>
        );
    }

    clickHandler() {
        // 通过对象形式
        // this.setState({
        //     count: this.state.count + 1,
        // });

        // 通过函数形式(推荐)
        this.setState(state => {
            return {
                count: state.count + 1,
            };
        });
    }
}

export default App6;

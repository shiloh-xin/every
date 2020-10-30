import React, { Component } from 'react';

class App12 extends Component {
    state = {
        msg: 'hello world',
    };

    render() {
        return (
            <div>
                <input type="text" defaultValue={this.state.msg} />
            </div>
        );
    }
}

export default App12;

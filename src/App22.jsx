import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// 导入后台集中管理的index
import Index from './Admin/Index';

class App22 extends Component {
    render() {
        return (
            <div>
                <Route path="/admin" component={Index}></Route>
            </div>
        );
    }
}

export default App22;

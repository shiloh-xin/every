import React, { Component, Fragment } from 'react';
// 引入样式
import './assets/style.css';
// 引入子组件
import Header from './Header';
import To from './To';
import Do from './Do';

class Index extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <div className="main">
                    <div className="main-w w">
                        <To></To>
                        <Do></Do>
                    </div>
                </div>
                <footer>Copyright &copy; 2020 todolist.cn</footer>
            </Fragment>
        );
    }
}

export default Index;

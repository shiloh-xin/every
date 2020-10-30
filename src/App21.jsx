// 导入
import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';

// 导入路由规则需要使用的组件
import Home from './Components/Cmp11';
import News from './Components/Cmp12';
import About from './Components/Cmp13';

class App21 extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>导航区域</h1>
                    <ul>
                        <li>
                            <Link to="/home">家</Link>
                        </li>
                        <li>
                            <Link to="/news/1030?publishData=20201030">
                                新闻
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">关于</Link>
                        </li>
                    </ul>
                </div>
                {/* 定义路由规则 */}
                <Route path="/home" component={Home}></Route>
                <Route path="/news/:id" component={News}></Route>
                <Route path="/about" component={About}></Route>
                {/* <Route path="/about">
                    <About></About>
                </Route> */}
            </Router>
        );
    }
}

export default App21;

// 重定向路由
import React, { Component } from 'react';
import { Route, Link, Redirect, Switch } from 'react-router-dom';

import Cmp11 from './Components/Cmp11';
import Cmp12 from './Components/Cmp12';
import Cmp13 from './Components/Cmp13';
import NotFound from './Components/404';

class App23 extends Component {
    render() {
        return (
            <div>
                <Link to="/home">家</Link>
                <br />
                <Link to="/news">新闻</Link>
                <br />
                <Link to="/about">关于</Link>
                <Redirect from="/" to="/home"></Redirect>

                <Switch>
                    {/* <Route path="/home" component={Cmp11}></Route> */}
                    <Route path="/home" component={() => <Cmp11 />}></Route>
                    <Route path="/news" component={Cmp12}></Route>
                    {/* <Route path="/news" render={props => <Cmp12 />}></Route> */}
                    {/* <Route path="/about" component={Cmp13}></Route> */}
                    <Route path="/about" children={<Cmp13 />}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        );
    }
}

export default App23;

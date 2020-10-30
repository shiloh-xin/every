import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// 导入后续非公共的路由部分的需要使用的组件
import User from './User';
import Goods from './Goods';

class Index extends Component {
    render() {
        // 获取数据
        let prefix = this.props.match.path;
        // 不用模板字符串解析的话，也可以用这种方法
        let urlUser = prefix + '/user';
        return (
            <div>
                <h1>欢迎使用后台管理程序</h1>
                <Route path={urlUser} component={User}></Route>
                <Route path={`${prefix}/goods`} component={Goods}></Route>
            </div>
        );
    }
}

export default Index;

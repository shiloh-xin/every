import React, { Component } from 'react';

class Cmp13 extends Component {
    render() {
        return (
            <div>
                <button onClick={this.goUrl.bind(this)}>去新闻</button>
                <h1>关于页面</h1>
            </div>
        );
    }

    goUrl() {
        // 编程式导航
        this.props.history.push({
            pathname: '/news/10086', // 地址后面如果有参数设定一定要匹配上
            search: '?from=about', //查询字符串
            // 隐式传参（地址栏不体现）
            state: {
                uname: 'admin',
                data: '2020.10.30',
            },
        });
        // this.props.history.go(-1);
    }
}

export default Cmp13;

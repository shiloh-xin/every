import React, { Component } from 'react';
import querystring from 'querystring';
import { Redirect } from 'react-router-dom';

class Cmp12 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 接收动态路由参数
            news_id: this.props.match.params.id,
            // 接收查询字符串并处理
            query: querystring.parse(this.props.location.search.slice(1)),
            // 接收state
            state: this.props.location.state,
        };
    }

    render() {
        return (
            <div>
                <h1>新闻页面</h1>
                <Redirect from="/news" to="/about"></Redirect>
            </div>
        );
    }
}

export default Cmp12;

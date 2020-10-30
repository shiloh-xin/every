// 常规导入
import React, { Component } from 'react';
// import store from './Store/index';
// 引入对应action文件中所有的被导出的成员，并集合在一起（actions）
import * as actions from './Store/actions/action_app20';
// 引入connect
import { connect } from 'react-redux';

class App20 extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = store.getState();
    //     // // 订阅数据
    //     // store.subscribe(() => {
    //     //     this.setState(state => (state = store.getState()));
    //     // });
    // }

    render() {
        return (
            <div>
                仓库中存储的数据是：{this.props.count}
                <br />
                <button onClick={this.props.clickHandler}>点我给数据+9</button>
            </div>
        );
    }

    // clickHandler() {
    //     // 将规则给reducer处理数据
    //     store.dispatch(actions.actionCreator());
    // }
}

// 获取数据
const mapStateToProps = state => {
    return {
        count: state.count,
    };
};
// 派发修改
const mapDispatchToProps = dispatch => {
    return {
        clickHandler() {
            dispatch(actions.actionCreator());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App20);

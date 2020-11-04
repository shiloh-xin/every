// 引入
import React from 'react'; //可以不写，建议留着
import ReactDOM from 'react-dom';

// 配置react-redux
import { Provider } from 'react-redux';
import store from './Store/index';
import { BrowserRouter as Router } from 'react-router-dom';

// 导入根组件
import App from './TodoList/Index';

// 渲染视图
ReactDOM.render(
    // 共享store给全局的组件
    <Provider store={store}>
        <Router>
            <App></App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

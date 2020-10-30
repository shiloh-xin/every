// 引入react
// import React from 'react'; //可以不写，建议留着
import React, { Component } from 'react';

// 类组件
// 方式1
// class App extends React.Component {
//     render() {
//         return <div>这是第一个类组件</div>;
//     }
// }

// 方式2：按需导入Component
class App extends Component {
    render() {
        return <div>这是第一个类组件</div>;
    }
}

// 导出
export default App;

// 函数组件
// 方式1：标准写法
// function App() {
//     return <div>这是第一个函数组件</div>;
// }

// 方式2：箭头函数
// const App = () => {
//     return <div>这是第一个函数组件</div>;
// };

// 方式3：直接导出
// export default () => {
//     return <div>这是第一个函数组件</div>;
// };

import React, { Component } from 'react';
// 引入高阶组件
import HOC from './Hoc/Hoc_copyright';

class App19 extends Component {
    render() {
        return (
            <div>
                <h1>网站首页</h1>
                <div>
                    德国总理默克尔28日与各州州长会谈后宣布，将从11月2日起至11月底在德国全境实施包括关闭大部分公共设施、餐饮娱乐场所以及限制个人出游等在内的多项措施。尽管中小学和幼儿园仍将继续开放，但其余措施已达到年初第一波新冠疫情期间实施“封城”的力度
                </div>
            </div>
        );
    }
}

// 使用高阶组件
export default HOC(App19);

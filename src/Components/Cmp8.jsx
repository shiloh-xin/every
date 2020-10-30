import React, { Component } from 'react';

class Cmp8 extends Component {
    render() {
        return <div></div>;
    }

    componentDidMount() {
        // 获取父state中的数据（父 - 子）
        console.log(this.props.chengxu());
        // 在子中给父state改数据（子 - 父）
        this.props.chengxu2('王者跟青铜的区别');
    }
}

export default Cmp8;

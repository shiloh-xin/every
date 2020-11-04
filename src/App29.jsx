import React, { Component, Fragment } from 'react';
// 导入需要使用的样式
import { Title, Button, Button2, Input } from './assets/style/style';

class App29 extends Component {
    render() {
        return (
            <Fragment>
                <Title>桃之夭夭，灼灼其华。</Title>
                <Button>我是第一个按钮</Button>
                <Button2>我是第二个按钮</Button2>
                <Input
                    defaultValue="are you ok?"
                    inputColor="yellowgreen"></Input>
            </Fragment>
        );
    }
}

export default App29;

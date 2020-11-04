// 使用styled-component去写css样式
import styled from 'styled-components';

// 开始定义样式（按需导出）
const Title = styled.div`
    font-size: 110px;
    color: hotpink;
    font-family: 华文行楷;
    background-color: yellow;
    text-align: center;
`;

const Button = styled.button`
    font-size: 20px;
    border: 1px solid red;
    border-radio: 3px;
`;
const Button2 = styled(Button)`
    color: blue;
    border-color: yellow;
`;

// 动态参数传递
const Input = styled.input`
    color: ${props => props.inputColor || 'red'};
`;

// 导出
export { Title, Button, Button2, Input };

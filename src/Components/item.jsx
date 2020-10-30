import React, { Component } from 'react';

// 函数组件
// const Item = props => {
//     return (
//         <div>
//             海纳百川有容乃大，{props.next}。 --- {props.name}
//         </div>
//     );
// };

// const Item = ({ next, name }) => {
//     return (
//         <div>
//             海纳百川有容乃大，{next}。 --- {name}
//         </div>
//     );
// };

class Item extends Component {
    render() {
        return (
            <div>
                海纳百川有容乃大，{this.props.next}。 --- {this.props.name}
            </div>
        );
    }
}

export default Item;

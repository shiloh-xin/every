import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/action_cart';

class Cart extends Component {
    render() {
        let total = 0;
        let addTotal = 0;
        this.props.cartList.map((item, index) => {
            if (item.done) {
                total += item.num * item.price;
            }
        });
        addTotal += total;
        return (
            <div>
                <div>
                    <input
                        type="checkbox"
                        onChange={this.props.all.bind(this)}
                        checked={this.props.bool ? 'checked' : ''}
                    />
                    全选
                    <button onClick={this.props.reverse.bind(this)}>
                        反选
                    </button>
                </div>
                <ul>
                    {this.props.cartList.map((item, index) => {
                        return (
                            <li style={{ listStyle: 'none' }} key={index}>
                                <input
                                    type="checkbox"
                                    onChange={this.props.clickHandler.bind(
                                        this,
                                        index
                                    )}
                                    checked={item.done ? 'checked' : ''}
                                />
                                商品ID：{item.id}&emsp;&emsp; 商品名称：
                                {item.name}&emsp;&emsp; 商品价格：{item.price}
                                &emsp;&emsp; 商品数量：
                                <button
                                    onClick={this.props.sub.bind(this, index)}>
                                    -
                                </button>
                                {item.num}
                                <button
                                    onClick={this.props.add.bind(this, index)}>
                                    +
                                </button>
                                &emsp;&emsp; 商品小计：
                                {item.num * item.price}
                            </li>
                        );
                    })}
                </ul>
                <div>总计：{addTotal}</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        cartList: state.cart.cartList,
        bool: state.cart.bool,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sub(index) {
            dispatch(actions.sub(index));
        },
        add(index) {
            dispatch(actions.add(index));
        },
        clickHandler(index, e) {
            let ref = e.target.checked;
            dispatch(actions.clickHandler(ref, index));
        },
        all(e) {
            dispatch(actions.all(e.target.checked));
        },
        reverse() {
            dispatch(actions.reverse(true));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

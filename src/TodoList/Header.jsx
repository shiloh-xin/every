import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/action_todo';
import { toJS } from 'immutable';

class Header extends Component {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="header-w w">
                        <div className="logo">
                            <h1>ToDoList</h1>
                        </div>
                        <div className="add">
                            <input
                                type="text"
                                id="title"
                                placeholder="添加ToDo"
                                onKeyUp={this.onKeyUpEnt}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
    onKeyUpEnt = e => {
        if (e.keyCode === 13 && e.target.value != '') {
            let content = e.target.value;
            this.props.plus(content);
            e.target.value = '';
        }
    };
}
const mapStateToProps = state => {
    return {
        list: state.toJS().todo.list,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        plus(content) {
            dispatch(actions.plus(content));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

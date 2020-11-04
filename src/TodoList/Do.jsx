import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Store/actions/action_todo';
import { toJS } from 'immutable';

// 引入过渡动画样式
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../assets/css/animate.min.css';

class Do extends Component {
    render() {
        let count = 0;
        this.props.list.map((item, index) => {
            if (item.state) {
                count++;
            }
        });
        return (
            <Fragment>
                <div className="end">
                    <div className="title">
                        <h1>已经完成</h1>
                        <div className="count">
                            <span id="doneCount">{count}</span>
                        </div>
                    </div>
                    <ul id="donelist">
                        <TransitionGroup>
                            {this.props.list.map((item, index) => {
                                if (item.state) {
                                    return (
                                        <CSSTransition
                                            key={index}
                                            timeout={700}
                                            classNames={{
                                                enter: 'animate__animated',
                                                enterActive:
                                                    'animate__fadeInDown',
                                            }}>
                                            <li key={index}>
                                                <input
                                                    type="checkbox"
                                                    checked="checked"
                                                    onChange={this.props.change.bind(
                                                        this,
                                                        index
                                                    )}
                                                />
                                                <p>{item.content}</p>
                                                <a href="#" id="">
                                                    <div
                                                        className="del"
                                                        onClick={this.props.del.bind(
                                                            this,
                                                            index
                                                        )}>
                                                        ×
                                                    </div>
                                                </a>
                                            </li>
                                        </CSSTransition>
                                    );
                                }
                            })}
                        </TransitionGroup>
                    </ul>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.toJS().todo.list,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        change(index) {
            dispatch(actions.change(index));
        },
        del(index) {
            dispatch(actions.del(index));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Do);

import React, { Component, Fragment } from 'react';
import { Route, withRouter } from 'react-router-dom';

class MyLink extends Component {
    render() {
        // 获取标签
        var Tag = this.props.tag ? this.props.tag : 'a';
        // var tag = this.props.tag || 'a';
        return (
            <Fragment>
                <Route
                    path={this.props.to}
                    children={props => {
                        if (props.match) {
                            return (
                                <Tag
                                    onClick={this.goUrl}
                                    style={{ color: 'red' }}
                                >
                                    {this.props.children}
                                </Tag>
                            );
                        } else {
                            return (
                                <Tag onClick={this.goUrl}>
                                    {this.props.children}
                                </Tag>
                            );
                        }
                    }}
                ></Route>
            </Fragment>
        );
    }
    goUrl = () => {
        this.props.history.push(this.props.to);
    };
}

export default withRouter(MyLink);

import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './assets/css/animate.min.css';

class App27 extends Component {
    state = {
        user: ['张三'],
    };

    clickHandler = () => {
        this.setState(state => {
            let name = '李四' + Math.random();
            return {
                user: [...state.user, name],
            };
        });
    };

    render() {
        return (
            <Fragment>
                <div>
                    <TransitionGroup>
                        {this.state.user.map((item, index) => {
                            return (
                                <CSSTransition
                                    key={index}
                                    timeout={1000}
                                    classNames={{
                                        enter: 'animate__animated',
                                        enterActive: 'animate__fadeInDown',
                                    }}>
                                    <h3 key={index}>{item}</h3>
                                </CSSTransition>
                            );
                        })}
                    </TransitionGroup>
                </div>

                <button onClick={this.clickHandler}>添加</button>
            </Fragment>
        );
    }
}

export default App27;

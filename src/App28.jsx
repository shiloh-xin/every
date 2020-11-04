import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import './assets/css/animate.min.css';
import Cmp16 from './Components/Cmp16';
import Cmp17 from './Components/Cmp17';

class App28 extends Component {
    render() {
        return (
            <Fragment>
                <ul>
                    <li>
                        <Link to="/nowPlaying">正在热映</Link>
                    </li>
                    <li>
                        <Link to="/comingSoon">即将上映</Link>
                    </li>
                </ul>
                <TransitionGroup>
                    <CSSTransition
                        timeout={5000}
                        classNames={{
                            enter: 'animate__animated',
                            enterActive: 'animate__hinge',
                            exit: 'animate__animated',
                            exitActive: 'animate__heartBeat',
                        }}
                        unmountOnExit
                        key={this.props.location.pathname}>
                        <Switch>
                            <Route path="/nowPlaying" component={Cmp16}></Route>
                            <Route path="/comingSoon" component={Cmp17}></Route>
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}

export default withRouter(App28);

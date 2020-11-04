import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MyLink from './Components/MyLink';
import Cmp14 from './Components/Cmp14';
import Cmp15 from './Components/Cmp15';

class App25 extends Component {
    render() {
        return (
            <div>
                <MyLink to="/cmp14" tag="h1">
                    去CMP14
                </MyLink>
                <MyLink to="/cmp15" tag="h1">
                    去CMP15
                </MyLink>
                <Route path="/cmp14" component={Cmp14}></Route>
                <Route path="/cmp15" component={Cmp15}></Route>
            </div>
        );
    }
}

export default App25;

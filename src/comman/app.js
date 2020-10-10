import React, { Component } from 'react';
import { Switch, Route } from 'react-router';

import Index from '../server/index';
import Home from './home';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={props => { return <Index {...props} /> }} />
                <Route path="/home" component={props => { return <Home {...props} /> }} />
            </Switch>
        );
    }
}

export default App;
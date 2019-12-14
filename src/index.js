import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// page
import App from './App';
import Book from './pages/Book'

ReactDOM.render(

    <Router>

        <Switch>

            <Route exact path="/" component={App} />
            <Route exact path="/book" component={Book} />

        </Switch>

    </Router>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import App from './components/App';
import PostsList from './components/PostsList';
import CategoryList from './components/Categories';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
        <App>
          <Route exact path="/" component={CategoryList} />
          <Route path="/:category" component={PostsList} />
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

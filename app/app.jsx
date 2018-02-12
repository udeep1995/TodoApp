var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var TodoApp = require('TodoApp');
var actions = require('actions');
var {store} = require('configureStore');
import firebase, {firebaseRef} from 'app/firebase/index';
// var {Provider} = require('react-redux');

// store.subscribe(() => {
//   console.log('New State', store.getState());
// })
// store.dispatch(actions.addTodo('Clean the yard'));
// store.dispatch(actions.setSearchText('yard'));
// store.dispatch(actions.toggleShowCompleted());


//Load foundation
require('style-loader!css-loader!foundation-sites/dist/foundation.min.css');
$(document).foundation();
require('!style-loader!css-loader!applicationStyles')
ReactDOM.render(
  <Router history = {hashHistory}>
        <Route path="/" component = {TodoApp}>
        </Route>
    </Router>
  , document.getElementById('app'));

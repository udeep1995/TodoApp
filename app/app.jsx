var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main = require('Main');
var TodoApp = require('TodoApp');
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

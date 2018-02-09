var redux = require('redux');
var  {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');

  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  })
  export var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension ? window.devToolsExtension(): f => f
  ));

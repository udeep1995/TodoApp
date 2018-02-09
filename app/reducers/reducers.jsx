var moment = require('moment');
var uuid = require('uuid');
export var searchTextReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_SEARCH_TEXT':
          return action.searchText;

        default:
          return state;
    };
};

export var showCompletedReducer = (state = false, action) => {
    switch(action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state;
      default:
        return state;
    }
}

export var toodsReducer = (state = [], action) => {
  switch (action.type): {
    case 'ADD_TODO': {
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
        }
      ]
    };
    case 'TOGGLE_TODO': {
      return state.map((todo) => {
          if( todo.id === action.id ){
             todo.completed ? todo.completedAt = undefined :todo.completedAt = moment().unix();
             todo.completed = !todo.completed;
             return todo;
          }
      })
    }
    default:
    return state;
  }
}

var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');  // to check if reducers remain pure functions
describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };
      var res = reducers.searchTextReducer(df(''),df(action));
      expect(res).toEqual(action.searchText);
    })
  })
  describe('showCompletedReducer', () => {
    it('should toggle show completed', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));
      expect(res).toEqual(true);
    })
  })
  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action= {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };
      var res = reducers.todosReducer(df([]),action);
      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });
    
    it('should toggle todo', () => {
      var todos = [
        {
          id:'123',
          text: 'Some todo',
          createdAt: 123,
          completed: true,
          completedAt: 125
        }
      ];
      var action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });
})

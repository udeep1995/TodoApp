var React= require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var SearchTodo = require('SearchTodo');
var uuid = require('node-uuid');
var moment = require('moment');
var TodoAPI = require('TodoAPI');
import firebase, {firebaseRef} from 'index';
var TodoApp = React.createClass({
  getInitialState:function(){
    return{
      isLoaded: false,
      showCompleted: false,
      searchText: '',
      createdAt:null,
      completedAt:null
  }
},
  componentDidUpdate:function(){
    // TodoAPI.setTodos(this.state.todos);
  },
  handleAddTodo:function(text){
    var newTodo = {
      text,
      completed:false,
      createdAt:moment().unix(),
      completedAt:null
    }
    var todoRef = firebaseRef.child('todos').push(newTodo);
        this.setState({
           todos:[...this.state.todos,
           {
             id: todoRef.key,
             ...newTodo
           }
         ]
       });
  },
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  handleToggle:function(id){
    var todoToUpdate = firebaseRef.child(`todos/${id}`);
    var snapShot = todoToUpdate.once('value').then((snapshot) => {
        snapShot = snapshot.val();
        todoToUpdate.update({
        completed: snapShot.completed ? false : true,
        completedAt: snapShot.completed ? null : moment().unix()
      });
    })

    var updatedTodos = this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : null
      }
      return todo;
    })
    this.setState({
      todos:updatedTodos
    })
  },
  handleRender: function() {

    if(this.state.isLoaded){
    var {todos,showCompleted,searchText} = this.state;
    var filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
          <h1 className="page-title">Todo App</h1>
          <div className ="row">
            <div className ="column small-centered small-11 medium-6 large-5">
              <div className="container" >
                <SearchTodo onSearch={this.handleSearch}></SearchTodo>
                <TodoList onToggle={this.handleToggle} todos = {filteredTodos}></TodoList>
                <AddTodo onAddTodo={this.handleAddTodo}></AddTodo>
              </div>
            </div>
          </div>
      </div>
    )
  } else{
        TodoAPI.getTodos().then((fromResolve) => {
          this.setState({
            todos:fromResolve,
            isLoaded:true
          })
        })
      return (
        <div>
            <h1 className="page-title column small-centered small-11 medium 6 large-5">
                  Loading...
            </h1>
        </div>
      )
  }
},
  render:function(){
      return this.handleRender();
  }
})
module.exports = TodoApp;

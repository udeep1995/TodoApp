var React = require('react');
var AddTodo = React.createClass({
  handleSubmit:function(e){
    e.preventDefault();
    var todo = this.refs.todo.value;
    if(todo.length>0){
         this.refs.todo.value = '';
        this.props.onAddTodo(todo);
      } else{
        this.refs.todo.focus();
      }
  },
    render:function(){
      return(
        <div className="container__footer">
        <form onSubmit = {this.handleSubmit}>
          <div>
            <input type="text" placeholder="Add Todo" ref="todo"></input>
          </div>
          <div>
            <button className="button expanded" type="submit">Add Todo</button>
          </div>
        </form>
        </div>
      )
    }
});

module.exports = AddTodo;

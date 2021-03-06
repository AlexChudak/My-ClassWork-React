import React, {Component} from 'react';
// import Counter from './components/Counter';
// import Dropdown from './components/Dropdown'
// import ColorPicker from './components/ColorPicker'
import TodoList from './components/TodoList';


// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Study React ', completed: true },
      { id: 'id-2', text: 'Learn React router', completed: false},
      { id: 'id-3', text: ' Relife Redux', completed: false }
    ],
  };
  
  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos:prevState.todos.filter(todo=>todo.id!==todoId),
    }))
  }


  render() {
    const { todos } = this.state;

    const completedTodos = todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
    console.log(completedTodos);

  return (
    <>
      <h1>Components</h1>
      <div>
        <p>Summ todoList: { todos.length}</p>
        <p>Summ complete todo: { completedTodos}</p>
      </div>
      <TodoList todos={todos} onDeleteTodo={ this.deleteTodo}/>
   {/* <Counter /> */}
    {/* <Dropdown /> */}
    {/* <ColorPicker options={colorPickerOptions}/> */}
    </>
  )
  }
};





export default App;
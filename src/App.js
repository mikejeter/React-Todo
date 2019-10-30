import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const data = [
  {
    name: "Shopping",
    id: 1001,
    completed: false
  },
  {
    name: "Doctor's Appointment",
    id: 1002,
    completed: false
  },
  {
    name: "School",
    id: 1003,
    completed: false
  },
  {
    name: "Yoga Class",
    id: 1004,
    completed: false
  },
  {
    name: "Yard Work",
    id: 1005,
    completed: false
  },
  {
    name: "Work",
    id: 1006,
    completed: false
  }
];

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: data
    };
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }


  toggleCompleted(todoId) {
    console.log("toggleCompleted: ", todoId);
    

    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  }

  clearCompleted = () => {
    console.log("clearCompleted");
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  };

  addTodo = todoName => {
    console.log("add todo: ", todoName);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    });

  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }

  
}

export default App;

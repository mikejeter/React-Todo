import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todoName: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({
      todoName: e.target.value
    });
  };

  // class property to submit form
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.todoName !== "") {
      this.props.addTodo(this.state.todoName);
      this.setState({
        todoName: ""
      });
    }
  };

  render() {
    console.log("rendering form");
    return (
      <form onSubmit={this.handleSubmit}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          onChange={this.handleChanges}
          type="text"
          name="todo"
          value={this.state.todoName}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
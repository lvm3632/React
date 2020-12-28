import React, { Component } from "react";

export default class TaskForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onSubmit = (e) => {
    console.log(e);
    console.log(this.state);
    console.log("enviando");
    this.props.addTask(this.state.title, this.state.description);

    e.preventDefault();
  };

  onChange = (e) => {
    console.log(e.target.value, e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Write a task"
          id=""
          onChange={this.onChange}
          value={this.state.title}
        />
        <br />
        <br />
        <textarea
          name="description"
          id=""
          placeholder="Write a description"
          onChange={this.onChange}
          value={this.state.description}
        ></textarea>

        <button type="submit">Save a Task</button>
      </form>
    );
  }
}

import React, { Component } from "react";

export default class TaskForm extends Component {
  onSubmit = (e) => {
    console.log(e);
    console.log("enviando");
    e.preventDefault();
  };

  onChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name=""
          placeholder="Write a task"
          id=""
          onChange={this.onChange}
        />
        <br />
        <br />
        <textarea
          name=""
          id=""
          placeholder="Write a description"
          onChange={this.onChange}
        ></textarea>

        <button type="submit">Save a Task</button>
      </form>
    );
  }
}

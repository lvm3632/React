import React, { Component } from "react";
import "./App.css";
import tasks from "./sample/tasks.json";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Components
import Tasks from "./components/Tasks";
import TaskForm from "./components/TaskForm";
import Posts from "./components/Posts";
console.log(tasks);

class App extends Component {
  state = {
    tasks: tasks,
  };

  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length,
    };

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
    console.log(newTask);
  };

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => task.id !== id);
    console.log(newTasks);
    this.setState({ tasks: newTasks });
  };

  checkDone = (id) => {
    const newTasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Router>
          <Link to="/">Home</Link>
          <br />
          <Link to="/posts">Posts</Link>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <div>
                  <TaskForm addTask={this.addTask} />
                  <Tasks
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkDone={this.checkDone}
                  />
                </div>
              );
            }}
          ></Route>
          <Route path="/posts" component={Posts} />
        </Router>
      </div>
    );
  }
}

export default App;

// function Helloworld(props) {
//   console.log(props);

//   return (
//     <div id="hello">
//       <h3>{props.subtitle}</h3>
//       {props.mytext}
//     </div>
//   );
// }

// class Helloworld extends React.Component {
//   state = {
//     show: true,
//   };

//   toggleShow = () => {
//     this.setState({ show: !this.state.show });
//   };

//   render() {
//     if (this.state.show) {
//       return (
//         <div id="hello">
//           <h3>{this.props.subtitle}</h3>
//           {this.props.mytext}

//           {/* <button onClick={() => this.toggleShow.bind(this)}>
//             Toggle show
//           </button> */}

//           <button onClick={this.toggleShow}>toggleShow</button>
//         </div>
//       );
//     } else {
//       return (
//         <h1>
//           There are not elements
//           <button onClick={this.toggleShow}>Toggle Show</button>
//         </h1>
//       );
//     }
//   }
// }

// const App = () => (
//   <div>
//     This is my component: <HelloWorld />{" "}
//   </div>
// );

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         This is my component
//         <Helloworld mytext="hello fazt" subtitle="lorem ipsum" />
//         <Helloworld mytext="Daniela te amoaa" subtitle="component2" />
//         <Helloworld mytext="perdome daniela" subtitle="component3" />
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div>
//       <HelloWorld />
//       <HelloWorld />
//     </div>
//   );
// }

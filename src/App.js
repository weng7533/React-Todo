import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Good Garage',
    id: 1528817077286,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    }
  }


  addTask = (inputedTask) => {
    const newTask = {
      task: inputedTask,
      id: Date.now(),
      completed: false
    }

    this.setState(
      {
        tasks: [...this.state.tasks, newTask],
      }
    )
    console.log(this.state.tasks);
  }

  lineThroughTask = (completedTask) => {


    const completed = this.state.tasks.map((task, index) => {
      if (task.task === completedTask) {
        task.completed = !task.completed;
      }
      return task;
    })
    this.setState(
      {
        tasks: completed
      }
    )

  };


  clearCompleted = () => {
    const notCompleted = this.state.tasks.filter((task) => {
      return task.completed === false;
    })


    this.setState(
      {
        tasks: notCompleted
      }
    )


  }



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm inputedTask={this.addTask} clearCompleted={this.clearCompleted} />
        <TodoList tasks={this.state.tasks} lineThroughTask={this.lineThroughTask} />
      </div>
    );
  }




}

export default App;

import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

const tasks = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: true
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

    // this.setState(
    //   {
    //     tasks: [...this.state.tasks]
    //   }
    // )
    console.log(completedTask)
    this.state.tasks.map(task => {
      if (task.task === completedTask) {
        console.log(task.task)

        task.completed = !task.completed;
        console.log(`task.completed ${task.completed}`)
      }
    })

    console.log(`this.state.tasks[0].completed ${this.state.tasks[0].completed}`)
  };




  // this.state.tasks[0].completed = !this.state.tasks[0].completed;
  // console.log(this.state.tasks[0].completed);

  // this.setState(
  //   {
  //     tasks: [...this.state.tasks, editTask],
  //   }
  // )

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm inputedTask={this.addTask} />
        <TodoList tasks={this.state.tasks} lineThroughTask={this.lineThroughTask} />
      </div>
    );
  }




}

export default App;

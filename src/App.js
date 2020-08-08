import React from 'react';

import TodoForm from '../src/components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { task: 'apple', lineThrough: false, id: 0 },
        { task: 'computer', lineThrough: false, id: 1 }
      ],
      listInput: 'enter new todos here',
      deleteItem: ''
    };
  }
  handleAddTodo = event => {
    event.persist();
    event.preventDefault();

    this.setState({
      ...this.state,
      list: [...this.state.list,
      { task: this.state.listInput, lineThrough: false, id: this.state.list.length },
      ],
      listInput: ''
    });

  }



  handleClearCompleted = event => {
    event.persist();
    event.preventDefault();

    const firstFunction = () => {
      console.log(this.state.list)
      this.setState({
        ...this.state,
        list: this.state.list.filter(item => {

          return (
            item.task !== this.state.deleteItem &&
            item.lineThrough === false
          )
        })
      }
      );


    }

    // const secondFunction = () => {
    //   this.setState({
    //     ...this.state,
    //     list: this.state.list.filter(item => item.lineThrough === false)
    //   });
    // }

    firstFunction();



    console.log('inside CC ', this.state);
  }



  handleOnKeyDown = event => {

  }


  handleChange = event => {
    event.persist();
    event.preventDefault();
    this.setState({
      ...this.state,
      listInput: event.target.value
    })
  }
  handleonMouseLeave = event => {

    this.setState({
      ...this.setState,
      deleteItem: window.getSelection().toString()
    })


  }


  handleListClick = item => {
    console.log('item', item);
    console.log('this.state.list', this.state.list)
    this.state.list.splice(item, 1, { task: this.state.list[item].task, lineThrough: !this.state.list[item].lineThrough, id: this.state.list[item].id });
    this.setState({ state: this.state });

  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

    return (
      <div>
        {console.log('render', this.state.deleteItem)}
        <h2>Welcome to your Todo App!</h2>
        <TodoList state={this.state} handleListClick={this.handleListClick} handleonMouseLeave={this.handleonMouseLeave} list={this.state.list}></TodoList>
        <TodoForm state={this.state} handleAddTodo={this.handleAddTodo} handleClearCompleted={this.handleClearCompleted} handleChange={this.handleChange}></TodoForm>


      </div >
    );
  }
}

export default App;

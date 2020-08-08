import React from 'react';






const TodoForm = props => {

    return (

        <form>

            <input type="text" id="todoInput" name="todoInput" value={props.state.listInput} onChange={props.handleChange}></input>
            <button onClick={props.handleAddTodo}>Add To Do</button>
            <button onClick={props.handleClearCompleted}>Clear Completed</button>
        </form>
    )
}

export default TodoForm;
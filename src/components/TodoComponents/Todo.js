
import React from 'react';
import Todo from './components/TodoComponents/Todo';




const TodoList = props => {
    return (
        <>
            {
                props.list.map(item => {
                    return <div>item</div>
                })
            }
        </>
    )
}

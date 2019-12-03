import React from 'react';
import './Todo.css';


export default (props) => {

    return (

        <div ><h2 onClick={() => {
            { console.log('clicked') }
            props.lineThroughTask(props.task)
        }} className={`${props.completed ? 'doneTask' : ''}`}>{props.task}</h2></div>

    )
}
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';



const TodoList = props => {

    return (
        <>

            {props.list ?
                props.list.map((item, index) => {

                    if (props.state.list[index].lineThrough === true) {
                        return <p onKeyDown={props.onKeyDown} onClick={() => props.handleListClick(index)} style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} onMouseLeave={props.handleonMouseLeave} key={index}>{item.task}</p>
                    } else {
                        return <p onKeyDown={props.onKeyDown} onClick={() => props.handleListClick(index)} onMouseLeave={props.handleonMouseLeave} key={index}>{item.task}</p>
                    }



                })
                : ''
            }
        </>
    )
}

export default TodoList;
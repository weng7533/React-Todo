import React from 'react';

// export default (props) => {
//     return (
//         <form>
//             <input placeholder="change state" onChange={props.updateStateMessage} />
//             <button onClick={() => alert('Clicked')}>Add Todo</button>
//             <button onClick={() => alert('Clicked')}>Clear Completed</button>
//         </form>
//     )
// }


export default class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            input: '',
        }

    }

    changeHandler = e => {
        this.setState(
            {
                input: e.target.value,
            }
        )


    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.inputedTask(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="change state" onChange={this.changeHandler} />
                <button >Add Todo</button>
                <button >Clear Completed</button>
            </form>
        )
    }

}
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';

class TodoList extends React.Component {
    constructor () {
        super ();
        this.state = {
            task: '',
            id: '',
            completed: '',
        }
    }


    addItem = e => {
        e.preventDefault ();
        const newItem = {
            task: this.state.task,
            id: this.state.id,
            completed: this.state.completed,
    }
    this.setState({
        items: [...this.state.task, newItem],
        task: '',
        id: '',
        completed: '',
    })
}
    render (){
        
        return (
            'test' 
        );
    }


}

export default TodoList;
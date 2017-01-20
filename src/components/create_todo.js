import React from 'react';

export default class CreateTodo extends React.Component{
    render(){
        return(
            <form onSubmit={this.hanldeCreate.bind(this)}>
                <input type="text" placeholder="What do you need to do?" ref="createInput"/>
                <button>Create</button>
            </form>
        );
    }

    hanldeCreate(event){
        event.preventDefault();
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = "";
    }
}

import React from 'react';
import CreateTodo from './create_todo';
import TodoList from './todo_list';

const todos = [
    {
        task: "Make breakfast",
        isCompleted: false
    },
    {
        task: "Eat dinner",
        isCompleted: true
    }
];

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            todos
        };
    }

    render(){
        return(
            <div>
                <h1>Hello from Alydo</h1>
                <CreateTodo createTask={this.createTask.bind(this)}/>
                <TodoList toggleTask={this.toggleTask.bind(this)}
                    todos={this.state.todos}
                />
            </div>
        )
    }

    createTask(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        })
    }

    toggleTask(task){
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = ! foundTodo.isCompleted;
        this.setState({todos: this.state.todos});
    }
}

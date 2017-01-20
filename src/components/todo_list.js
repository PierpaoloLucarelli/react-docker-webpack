import React from 'react';
import _ from 'lodash';
import TodoListHeader from './todo_list_header';
import TodoListItem from './todo_list_item';

export default class TodoList extends React.Component{

    renderItems(){
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props} />);
    }

    render(){
        return(
            <table>
                    <TodoListHeader/>
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}

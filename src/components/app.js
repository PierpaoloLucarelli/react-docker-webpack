import React from 'react';
import SignupForm from './signup';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }

    render(){
        return(
            <div>
            <h1>Alydo</h1>
            <SignupForm/>
            </div>
        )
    }

}

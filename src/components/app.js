import React from 'react';
import Nav from './nav/navbar';
import SignupForm from './signup';

export default class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            signupIsVisible: true,
            items: []
        };
    }

    render(){
        console.log("rendering");
        return(
            <div>
                <Nav handleClick={this.handleClick.bind(this)}/>
                {this.state.signupIsVisible ? <SignupForm/> : null}
            </div>
        )
    }

    handleClick(){
        console.log(this.state.signupIsVisible);
        this.setState({
            signupIsVisible: !this.state.signupIsVisible
        });
    }

}

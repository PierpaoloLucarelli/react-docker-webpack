import React from 'react';

export default class SignupForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null
        }
    }

    render(){
            return(
                <div className="signup">
                    <h1>Create an account with Alydo</h1>
                    <form className="alydo-form" onSubmit={this.sendRegister.bind(this)}>
                    <input
                        ref="username"
                        type="text"
                        placeholder="Username"
                        defaultValue={this.state.email}
                        onChange={this.handleUsername.bind(this)}
                     />

                     <input
                        ref="password"
                        type="password"
                        placeholder="Password"
                        defaultValue={this.state.password}
                        onChange={this.handlePassword.bind(this)}
                     />

                     <input
                        ref="passwordConfirm"
                        type="password"
                        placeholder="Confirm password"
                        defaultValue={this.state.password}
                     />

                     <input
                        type="submit"
                        className="button red-btn"
                        onChange={this.handleConfirmPassword.bind(this)}
                    />

                    </form>
                </div>
            );
    }

    handleUsername(event){
        this.setState({
            username: event.target.value
        });
    }

    handleConfirmPassword(event){
        this.setState({
            password: event.target.value
        });
    }

    handlePassword(event){
        this.setState({
            password: event.target.value
        });
    }

    sendRegister(event){
        event.preventDefault();
        fetch("http://127.0.0.1:8000/signup", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            })
        }).then((response) => console.log("registration successfull"));
    }
}

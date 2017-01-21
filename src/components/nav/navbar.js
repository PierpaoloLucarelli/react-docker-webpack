import React from 'react';
export default class Nav extends React.Component{


    render(){
        return(
            <nav className="clearfix">
                <button onClick={this.props.handleClick} className="buttons">Signup</button>
                <button className="buttons">Login</button>
            </nav>
        )
    }

}

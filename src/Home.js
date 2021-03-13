import React, { Component } from 'react';

class Home extends Component{
    render(){
        return(
            <div>
                <h1> Welcome to Borcbook!</h1>
                <button>Create</button>
                <button>Join</button>
                <ul>
                    <li>Casa Borca</li>
                    <li>Clio</li>
                </ul>
            </div>
        );
    }
}

export default Home
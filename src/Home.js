import React, { Component } from 'react';

class Home extends Component{
    render(){
        const entityList = [
            {
                id: 1,
                name:"casaBorca"
            },
            {
                id: 2,
                name:"clio"
            }
        ];
        const entries = entityList.map((entity)=>{
            return (
                <li>{entity.name}</li>
            );
        }); 
        return(
            <div>
                <h1> Welcome to Borcbook!</h1>
                <div>
                    <button>Create</button>
                </div>
                <div>
                    <button>Join</button>
                </div>               
                <ul>
                    {entries}
                </ul>
            </div>
        );
    }
}

export default Home
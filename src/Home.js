import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component{
    state = {
        entityList:[]
    };

    componentDidMount(){
        setTimeout(()=>{
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
            this.setState({entityList:entityList})
        },3000);
    }

    render(){
        const entries = this.state.entityList.map((entity)=>{
            return (
                <li>{entity.name}</li>
            );
        }); 
        return(
            <div>
                <h1> Welcome to Borcbook!</h1>
                <div>
                    <Link to="/create"><button>Create</button></Link>
                </div>
                <div>
                    <Link to="/join"><button>Join</button></Link>
                </div>
                <ul>
                    {entries}
                </ul>
            </div>
        );
    }
}

export default Home
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        const entities = this.props.entities.map((entity) => {
            return (
                <li key={entity.id}>
                    <Link to={`/overview/${entity.id}`}>{entity.name}</Link>
                </li>
            );
        });
        return (
            <div>
                <h1> Welcome to Borcbook!</h1>
                <div>
                    <Link to="/create">
                        <button>Create</button>
                    </Link>
                </div>
                <div>
                    <Link to="/join">
                        <button>Join</button>
                    </Link>
                </div>
                <ul>{entities}</ul>
            </div>
        );
    }
}

export default Home;

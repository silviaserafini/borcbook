import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    state = {
        entityList: [],
    };

    componentDidMount() {
        setTimeout(() => {
            const entityList = [
                {
                    id: 1,
                    name: 'casaBorca',
                    reservations: [
                        {
                            user: {
                                email: 'silvia@borcabook.com',
                                name: 'Silva',
                                group: 'SilviaFamily',
                            },
                            status: 'pending',
                            dateRange: {
                                start: '20210320',
                                end: '20210330',
                            },
                        },
                        {
                            user: {
                                email: 'francesco@borcabook.com',
                                name: 'Francesco',
                                group: 'SilviaFamily',
                            },
                            status: 'approved',
                            dateRange: {
                                start: '20210331',
                                end: '20210410',
                            },
                        },
                    ],
                },
                {
                    id: 2,
                    name: 'clio',
                },
            ];
            this.setState({ entityList: entityList });
        }, 500);
    }

    render() {
        const entries = this.state.entityList.map((entity) => {
            return (
                <li>
                    <Link
                        to={{
                            pathname: '/overview',
                            state: { entity: entity },
                        }}
                    >
                        {entity.name}
                    </Link>
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
                <ul>{entries}</ul>
            </div>
        );
    }
}

export default Home;

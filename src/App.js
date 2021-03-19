import './App.css';
import Home from './Home';
import Join from './Join';
import Create from './Create';
import Overview from './Overview';
import Reservation from './Reservation';
import { BrowserRouter, Route } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {
    state = { entities: [] };

    componentDidMount() {
        setTimeout(() => {
            const entities = [
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
            this.setState({ entities: entities });
        }, 500);
    }

    addReservation = (entityId, reservation) => {
        const updateEntities = JSON.parse(JSON.stringify(this.state.entities));

        const entity = updateEntities.find((entity) => entity.id == entityId);

        if (entity) {
            entity.reservations.push(reservation);
            this.setState({ entities: updateEntities });
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route
                        path="/"
                        exact
                        render={() => <Home entities={this.state.entities} />}
                    />
                    <Route path="/create" exact component={Create} />
                    <Route path="/join" exact component={Join} />
                    <Route
                        path="/overview/:id"
                        exact
                        render={(matchProps) => (
                            <Overview
                                entities={this.state.entities}
                                {...matchProps}
                            />
                        )}
                    />
                    <Route
                        path="/reservation/:id"
                        exact
                        render={(matchProps) => (
                            <Reservation
                                addReservation={this.addReservation}
                                {...matchProps}
                            />
                        )}
                    />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

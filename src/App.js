import './App.css';
import Home from './Home';
import Join from './Join';
import Create from './Create';
import Overview from './Overview';
import Reservation from './Reservation';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={Create} />
                <Route path="/join" exact component={Join} />
                <Route path="/overview" exact component={Overview} />
                <Route path="/reservation/:id" exact component={Reservation} />
            </div>
        </BrowserRouter>
    );
}

export default App;

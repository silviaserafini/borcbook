import './App.css';
import Home from './Home';
import Join from './Join';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact component={Home} />
        <Route path="/create" exact render={() => <h1>Create</h1>} />
        <Route path="/join" exact component={Join} />
      </div>
    </BrowserRouter>
  );
}

export default App;

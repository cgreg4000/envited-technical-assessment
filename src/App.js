import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import LandingPage from './components/LandingPage';
import Create from './components/Create';
import Event from './components/Event';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route exact path="/create">
            <Create></Create>
          </Route>
          <Route exact path="/event">
            <Event></Event>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LeagueDetails from './Components/LeagueDetails/LeagueDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path="/league/:id">
          <LeagueDetails></LeagueDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

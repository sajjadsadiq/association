import Home from './components/HomePage/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
    <Home></Home>
      <Switch>
        <Route>

        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

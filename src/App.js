import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from "./components/HomePage/HomePage/HomePage";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;

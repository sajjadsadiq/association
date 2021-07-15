import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard/UserDashboard/UserDashboard";
import Profile from "./components/UserDashboard/Profile/Profile";
import EditProfile from "./components/UserDashboard/EditProfile/EditProfile";

import HomePage from "./components/HomePage/HomePage/HomePage";

function App() {
  return (
    <>
<<<<<<< HEAD
    <Router>
      <Switch>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </Router>
=======
      <Router>
        <Switch>
          <Route path="/userdashboard" component={UserDashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/updateProfile" component={EditProfile} />
        </Switch>
      </Router>
>>>>>>> 42e3a2b0815dea27530d1e2e62a0cce2e80a70e9
    </>
  );
}

export default App;

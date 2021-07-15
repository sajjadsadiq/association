 
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserDashboard from "./components/UserDashboard/UserDashboard/UserDashboard";
import Profile from "./components/UserDashboard/Profile/Profile";
import EditProfile from "./components/UserDashboard/EditProfile/EditProfile";

import HomePage from "./components/HomePage/HomePage/HomePage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>

      <Router>
        <Switch>
          <Route path="/userdashboard" component={UserDashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/updateProfile" component={EditProfile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

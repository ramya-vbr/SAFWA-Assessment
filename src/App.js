import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Pages/LoginPage';
import SideNav from './Pages/SideNav';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <SideNav />
      </Switch>
    </Router>
  );
}

export default App;

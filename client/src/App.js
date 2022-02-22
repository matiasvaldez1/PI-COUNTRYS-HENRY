import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import CountryDetail from './components/CountryDetail/CountryDetail.jsx';
import FormActivities from './components/Activities/FormActivities'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/countries/:id'>
          <CountryDetail />
          </Route>
        <Route path='/postActivity'>
          <FormActivities />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

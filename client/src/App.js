import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import CountryDetail from './components/CountryDetail/CountryDetail.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/Home'>
          <NavBar/>
          <Home/>
        </Route>
        <Route path='/CountryDetail'>
          <CountryDetail/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

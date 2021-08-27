import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './components/Header';
import './App.css';
import SearchPage from './pages/SearchPage';
import FavoritesPage from './pages/FavoritesPage';



function App() {


  return (
    <div className="App">
      {/* Step 1 */}
      <Router >
        {/* Header is above switch so it appears on every page
        < Header /> */}
        <Switch>

          <Route exact path="/">
            <SearchPage />
          </Route>

          <Route exact path="/favorites">
            <FavoritesPage />
          </Route>


          <Route path="*">
            <Redirect to="/">
            {/* Redirect to homepage like so or leave an h1 page not found and a Link to return to homepage */}
            </Redirect>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

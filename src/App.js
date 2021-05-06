import './App.scss' ;
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path= "/" exact>
              <HomePage />
            </Route>
            <Route path= "/about" exact>
              <AboutPage />
            </Route>
            <Route path= "/portfolios" exact>
              <PortfoliosPage />
            </Route>
            <Route path= "/contact" exact>
              <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

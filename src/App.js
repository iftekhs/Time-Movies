import { Button } from '@material-ui/core';
import { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import SignUp from './SignUp';
import Season from './Season.js';
import Video from './Video';
import Privacy from './Privacy.js';
import Footer from './Footer';

function App() {
  const [mode, setMode] = useState(false);

  const darkMode = () => {
    setMode(!mode);
  };

  return (
    <div className={!mode ? 'app' : 'app__dark'}>
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Home />
            <Button
              onClick={darkMode}
              className={
                !mode
                  ? 'header__button'
                  : 'DarkMode'
              }>
              {!mode ? 'Dark Mode' : 'White Mode'}
            </Button>
          </Route>
          <Route path="/trailers">
            <Video name="trailers" />
            <Button
              onClick={darkMode}
              className={
                !mode
                  ? 'header__button'
                  : 'DarkMode'
              }>
              {' '}
              {!mode
                ? 'Dark Mode'
                : 'White Mode'}{' '}
            </Button>
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/venom">
            <Video name="venom" />
          </Route>
          <Route path="/hobsandshaw">
            <Video name="hobsandshaw" />
          </Route>
          <Route path="/rampage">
            <Video name="rampage" />
          </Route>
          <Route path="/jurassicworld">
            <Video name="jurassicworld" />
          </Route>
          <Route path="/missionimpossible">
            <Video name="missionimpossible" />
          </Route>
          <Route path="/interstellar">
            <Video name="interstellar" />
          </Route>
          <Route path="/martian">
            <Video name="martian" />
          </Route>
          <Route path="/arrival">
            <Video name="arrival" />
          </Route>
          <Route path="/snowpiercer">
            <Video name="snowpiercer" />
          </Route>
          <Route path="/cloverfield">
            <Video name="cloverfield" />
          </Route>
          <Route path="/season">
            <Season />
          </Route>
          <Route path="/signup">
            <SignUp />
            <Button
              onClick={darkMode}
              className={
                !mode
                  ? 'header__button'
                  : 'DarkMode'
              }>
              {!mode ? 'Dark Mode' : 'White Mode'}
            </Button>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

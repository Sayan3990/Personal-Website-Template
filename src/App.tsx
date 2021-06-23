import React from 'react';

// style sheets
import './App.css';

// React Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from './Constants/routes';

// Pages
import LandingPage from './Components/Userinterface/Landing';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.ACADEMICS} component={LandingPage} />
          <Route exact path={routes.ACHIEVEMENTS} component={LandingPage} />
          <Route exact path={routes.AI} component={LandingPage} />
          <Route exact path={routes.CP} component={LandingPage} />
          <Route exact path={routes.EXPERIENCES} component={LandingPage} />
          <Route exact path={routes.GITHUB} component={LandingPage} />
          <Route exact path={routes.HOBBIES} component={LandingPage} />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.PERSONAL_INFO} component={LandingPage} />
          <Route exact path={routes.SOCIAL_MEDIA} component={LandingPage} />
          <Route exact path={routes.TECH} component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

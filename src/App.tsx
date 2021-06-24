import React from 'react';

// style sheets
import './App.css';

// React Routing
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from './Constants/routes';

// Pages
import AcademicsPage from './Components/Userinterface/AcademicsPage';
import AchievementsPage from './Components/Userinterface/AchievementsPage';
import AIPage from './Components/Userinterface/AIPage';
import CPPage from './Components/Userinterface/CPPage';
import ExperiencePage from './Components/Userinterface/ExperiencePage';
import FeedbackPage from './Components/Userinterface/FeedbackPage';
import GithubPage from './Components/Userinterface/GithubPage';
import HobbiesPage from './Components/Userinterface/HobbiesPage';
import LandingPage from './Components/Userinterface/Landing';
import PersonalPage from './Components/Userinterface/PersonalPage';
import SocialPage from './Components/Userinterface/SocialPage';
import CSEPage from './Components/Userinterface/CSEPage';
import WebDevPage from './Components/Userinterface/WebDevPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.ACADEMICS} component={AcademicsPage} />
          <Route exact path={routes.ACHIEVEMENTS} component={AchievementsPage} />
          <Route exact path={routes.AI} component={AIPage} />
          <Route exact path={routes.CP} component={CPPage} />
          <Route exact path={routes.CSE} component={CSEPage} />
          <Route exact path={routes.EXPERIENCES} component={ExperiencePage} />
          <Route exact path={routes.FEEDBACK} component={FeedbackPage} />
          <Route exact path={routes.GITHUB} component={GithubPage} />
          <Route exact path={routes.HOBBIES} component={HobbiesPage} />
          <Route exact path={routes.LANDING} component={LandingPage} />
          <Route exact path={routes.PERSONAL_INFO} component={PersonalPage} />
          <Route exact path={routes.SOCIAL_MEDIA} component={SocialPage} />
          <Route exact path={routes.WEB_DEV} component={WebDevPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

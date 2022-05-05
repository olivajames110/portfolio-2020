import React from "react";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

import AboutScreen from "./screens/AboutScreen/AboutScreen";
import DesignScreen from "./screens/DesignScreen/DesignScreen";
import ProjectsScreenAlt from "./screens/ProjectsScreen/ProjectsScreenAlt";
import Header from "./shared/components/Navigation/Header/Header";
import Footer from "./shared/components/Navigation/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import ScrollToTop from "./shared/components/Navigation/ScrollToTop";
import ResumeScreen from "./screens/ContactScreen/ResumeScreen";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <HomeScreen />
      </Route>
      <Route path="/about" exact>
        <AboutScreen />
      </Route>
      <Route path="/projects" exact>
        <ProjectsScreenAlt />
      </Route>
      <Route path="/design" exact>
        <DesignScreen />
      </Route>
      <Route path="/resume" exact>
        <ResumeScreen />
      </Route>

      <Redirect to="/" />
    </Switch>
  );

  return (
    <Router>
      <ScrollToTop />
      <Header /> {routes}
      <Footer />
    </Router>
  );
};

export default App;

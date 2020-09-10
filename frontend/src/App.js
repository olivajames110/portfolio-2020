import React from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ProjectsScreen from './screens/ProjectsScreen/ProjectsScreen';
import Header from './shared/components/Navigation/Header/Header';
import Footer from './shared/components/Navigation/Footer/Footer';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

const App = () => {
  let routes = (
    <Switch>
      <Route path="/" exact>
        <HomeScreen/>
      </Route>
      <Route path="/about" exact>
        <AboutScreen/>
      </Route>
      <Route path="/projects" exact>
        <ProjectsScreen/>
      </Route>
      <Route path="/contact" exact>
        <ContactScreen/>
      </Route>
      <Redirect to="/"/>
    </Switch>
  );

  return (
    <Router>
      <Header/> {routes}
      <Footer/>
    </Router>
  );
};

export default App;

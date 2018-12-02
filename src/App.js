import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/appBar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link } from "../node_modules/react-router-dom";

class App extends Component {
  render() {
    const appRoutes = [
     {
      path: "",
      
      component: Home
    },{
      path: "home",
      component: Home
    },
    
   
];
  const sideBarItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];
  const title = 'App bar layout';
  const routes = appRoutes.map((route)=>
          <Route path={route.path} redirectTo={route.redirectTo} component={route.component} />
  );
  const router=(
    <Router>
      <div>
        {routes}
      </div>
    </Router>
  );

    return (
      <div className="App">
        <AppBar menuItems={sideBarItems} title={title}/>
        { router }
      </div>
    );
  }
}

export default App;
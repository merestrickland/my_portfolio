import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from '../src/homepage/homepage.component'
import Resume from '../src/resume/resume.component'

function App() {
  //get products from state and filter by the id typed at end of url?
  return (
      <Router>
        
        <Switch>
          <Route path='/'>
            <HomePage />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          {/* <Route path= '/products/:id'>
            <ProductModal />
          </Route> */}
          {/* <Route exact path={`/products/${modalData.id}`} component={ProductModal} /> */}
        </Switch>
      </Router>
  );
}


export default App;

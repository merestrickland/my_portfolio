import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component'
import Resume from './pages/resume/resume.component'
import Projects from './pages/projects/projects.component'
import PDFJSBackend from './backends/pdfjs'

function App() {
  //get products from state and filter by the id typed at end of url?
  return (
      // <>
      // <Router>
      //   <Route exact path='/' component={HomePage}/>
      //   <Route path='/projects' component={Projects}/>
      //   <Route path='/resume' component={Resume} />
      // </Router>
      
      // </>
      <Router>
        <Switch>
          <Route path="/resume">
            <Resume 
            backend={PDFJSBackend}
            src='/resume.pdf'/>
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <HomePage />
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

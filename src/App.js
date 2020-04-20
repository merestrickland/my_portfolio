import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component'
import Resume from './pages/resume/resume.component'
import Projects from './pages/projects/projects.component'
import Email from './pages/email/email.component'
import About from './pages/about/about.component'
// import NavBar from './components/nav/nav.component'
import PDFJSBackend from './backends/pdfjs'

function App() {

  return (

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
          {/* <Route path="/projects/:id">
            <Project />
          </Route> */}
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/about">
            <About />
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
      // </>
  );
}


export default App;

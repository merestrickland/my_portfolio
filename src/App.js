import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component'
import Resume from './pages/resume/resume.component'
import Projects from './pages/projects/projects.component'
import ProjectShow from './components/project/project-show.component'
import Email from './pages/email/email.component'
import About from './pages/about/about.component'
import WallDrawing from './pages/Sol-Lewitt/wall-drawing.container'
import NavBar from './components/navbar/navbar.component'
// import NavBar from './components/nav/nav.component'
import PDFJSBackend from './backends/pdfjs'

function App() {

  return (

      <Router>
       <NavBar />
        <Switch>
          <Route path="/resume">
            <Resume 
            backend={PDFJSBackend}
            src='/resume.pdf'/>
          </Route>
          <Route exact path="/work">
            <Projects />
          </Route>
          <Route path="/work/:projectName">
            <ProjectShow />
          </Route>
          <Route path="/wall-drawing" >
            <WallDrawing />
          </Route>
          <Route path="/email">
            <Email />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>

        </Switch>
      </Router>
      // </>
  );
}


export default App;

import React from 'react';
import './App.css';
import Folder from './components/folder';
import ProjectList from './components/project-list';

function App() {
  return (
    <React.Fragment>
      <div className="projects-root">
        <nav className="header">
          <ul className="main-nav">
            <li> 
              <a href="#" className="link">Home</a>
            </li>
            <li>
              <a href="#" className="link">Create Project</a>
            </li>
            <li>
              <a href="#" className="link">Admin</a>
            </li>
          </ul>
        </nav>
        <nav className="sidebar">
          <ul className="secondary-nav">
            <li>
              <a href="#" className="link">All Projects</a>
            </li>
            <li>
              <a href="#" className="link">Red Projects</a>
            </li>
            <li>
              <a href="#" className="link">Yellow Projects</a>
            </li>
            <li>
              <a href="#" className="link">Green Projects</a>
            </li>
            <li>
              <a href="#" className="link">Create Project</a>
            </li>
            <li>
              <a href="#" className="link">Admin</a>
            </li>
          </ul>
        </nav>
        <section className="projects-container">
          <div className="project-table">

            <ProjectList />
          </div>
          <div className="project-table">

          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;


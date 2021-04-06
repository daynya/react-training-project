/* import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); */


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import './projects.css';

function Total(props) {
  return (
    <div className="folder total-folder flex-auto">
      <span className="material-icons">folder</span>
      <div className="folder-title">
        <h1 className="font-semibold">109</h1>
        <h2>Total Projects</h2>
      </div>
    </div>
  );
}

function Red(props) {
  return (
    <div className="folder red-folder flex-auto">
      <span className="material-icons">report_problem</span>
      <div className="folder-title">
        <h1 className="font-semibold">18</h1>
        <h2>Red Projects</h2>
      </div>
    </div>
  );
}

function Yellow(props) {
  return (
    <div className="folder yellow-folder flex-auto">
        <span className="material-icons">info</span>
        <div className="folder-title">
          <h1 className="font-semibold">48</h1>
          <h2>Yellow Projects</h2>
        </div>
    </div>
  );
}

function Green(props) {
  return (
    <div className="folder green-folder flex-auto">
        <span className="material-icons">thumb_up</span>
        <div className="folder-title">
          <h1 className="font-semibold">123</h1>
          <h2>Green Projects</h2>
        </div>
    </div>
  );
}

function Folders(props) {
    return <div className="folder-wrapper">{props.children}</div>;
  };

function Directory(props) {
  return <div className="folder-directory">{props.children}</div>;
}

function TopNav(props) {
  return ( 
    <nav className="top-nav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Create Project</a></li>
        <li><a href="#">Admin</a></li>
      </ul>
    </nav>
  );
}

function LeftNav(props) {
  return (
    <nav className="left-nav">
      <ul>
        <li><a href="#"><span className="material-icons">folder</span>All Projects</a></li>
        <li><a href="#"><span className="material-icons">report_problem</span>Red Projects</a></li>
        <li><a href="#"><span className="material-icons">info</span>Yellow Projects</a></li>
        <li><a href="#"><span className="material-icons">thumb_up</span>Green Projects</a></li>
        <li><a href="#"><span className="material-icons">add</span>Create Project</a></li>
        <li><a href="#"><span className="material-icons">lock</span>Admin</a></li>
      </ul>
    </nav>
  );
}

ReactDOM.render(
  <Directory>
    <TopNav></TopNav>
    <LeftNav></LeftNav>
    <Folders>
      <Total />
      <Red />
      <Yellow />
      <Green />
    </Folders>
  </Directory>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

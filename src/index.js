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
import './red-projects.css';

/* class Red extends React.Component {
  render() {
      return (
      <div className="folder red-folder flex-auto">
        <span class="material-icons">report_problem</span>
        <h1 className="text-xl font-semibold">18</h1>
        <h2>Red Projects</h2>
      </div>
      );
  }
}

class Yellow extends React.Component {
  render() {
    return (
      <div className="folder yellow-folder flex-auto">
        <span class="material-icons">info</span>
        <h1 className="text-xl font-semibold">48</h1>
        <h2>Yellow Projects</h2>
      </div>
    )
  }
}

class Green extends React.Component {
  render() {
    return (
      <div className="folder green-folder flex-auto">
        <span class="material-icons">info</span>
        <h1 className="text-xl font-semibold">123</h1>
        <h2>Yellow Projects</h2>
      </div> 
    )
  }
} */

function Red(props) {
  return (
    <div className="folder red-folder flex-auto">
      <span class="material-icons">report_problem</span>
      <h1 className="text-xl font-semibold">18</h1>
      <h2>Red Projects</h2>
    </div>
  );
}

function Yellow(props) {
  return (
    <div className="folder yellow-folder flex-auto">
        <span class="material-icons">info</span>
        <h1 className="text-xl font-semibold">48</h1>
        <h2>Yellow Projects</h2>
    </div>
  );
}

function Green(props) {
  return (
    <div className="folder green-folder flex-auto">
        <span class="material-icons">info</span>
        <h1 className="text-xl font-semibold">123</h1>
        <h2>Green Projects</h2>
    </div>
  );
}
/* 
function Folders() {
    return (
      <Red>
        <span className="material-icons">info</span>
        <h1 className="text-xl font-semibold">18</h1>
        <h2>Red Projects</h2>
      </Red>
    );
} */

function Folders(props) {
    return <div>{props.children}</div>;
  };

ReactDOM.render(
  <Folders>
    <Red />
    <Yellow />
    <Green />
  </Folders>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

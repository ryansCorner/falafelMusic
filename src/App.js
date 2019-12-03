import React from 'react';
import './styles/App.css';
import { withRouter } from "react-router-dom"
import Layout from './components/templates/Layout';


function App() {
  return (
    <div className="App">
      <Layout />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default withRouter(App);

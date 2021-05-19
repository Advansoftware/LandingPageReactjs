import logo from './logo.svg';
import React from 'react';
import Section2 from './Component/section2.jsx';
import FinalPage from './Component/final.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div className="mt-5">
        <Section2 />
      </div>
      
      <footer className="App-footer">
        <FinalPage />
      </footer>
    </div>
  );
}

export default App;

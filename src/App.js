import React from 'react';
import Section2 from './Component/section2.jsx';
import FinalPage from './Component/final.jsx';
import Inicio from './Component/inicio.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Inicio />
      </div>
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

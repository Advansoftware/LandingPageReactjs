import React from 'react';
import Section2 from './Component/section2.jsx';
import FinalPage from './Component/final.jsx';
import Inicio from './Component/inicio.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <section className="App-header">
        <Inicio />
      </section>
      <section className="mt-5">
        <Section2 />
      </section>
      <footer className="App-footer">
        <FinalPage />
      </footer>
    </div>
  );
}

export default App;

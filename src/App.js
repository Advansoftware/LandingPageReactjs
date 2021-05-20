import React from 'react';
import Section2 from './Component/section2.jsx';
import FinalPage from './Component/final.jsx';
import Inicio from './Component/inicio.jsx';
import Bee from './Component/header.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Bee />
      </header>
      <section className="App-inicio">
        <Inicio />
      </section>
      <section className="mt-5 secao2">
        <Section2 />
      </section>
      <footer className="App-footer">
        <FinalPage />
      </footer>
    </div>
  );
}

export default App;

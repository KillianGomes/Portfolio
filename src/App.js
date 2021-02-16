import React from 'react';
import Bienvenue from './components/Bienvenue';
import './App.css';


function App() {
  return (
    <div className="container">
      <Bienvenue/>
      <footer className="bg-warning col-md-12 text-center text-white">
        Copyright &copy; 2021
      </footer> 
    </div>
  );
}

export default App;

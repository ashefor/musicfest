import React from 'react';
import './App.css';
import Cockpit from './container/Cockpit';
import {BrowserRouter} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
     <Cockpit />
     </BrowserRouter>
  );
}

export default App;

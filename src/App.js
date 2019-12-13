import React from 'react';
import './App.css';
import Home from './pages/Home';
// material component
import Fade from '@material-ui/core/Fade';

function App() {
  return (
    <Fade in={true} timeout={1000}>
      <div className="App">


        <Home />
        
      </div>
    </Fade>
  );
}

export default App;

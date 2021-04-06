import react from 'react';
import axios from 'axios';
import './App.css';

function App () {

  function getGiphs() {
    axios.get('/')
  }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <button onClick={getGiphs}>Get gifs</button>
        <br/>
      </div>
    );
  
}

export default App;


import axios from 'axios';
import './App.css';

function App () {
  
  const getGifs = () =>{
    console.log( 'in getGifs' );
    axios.get( '/giphy' ).then( ( response )=>{
      console.log( 'back from GET:', response.data );
    }).catch( ( err )=>{
      alert( 'err' );
      console.log( err );
    })
  } 

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">APIS</h1>
          <h4><i>APIS</i></h4>
        </header>
        <button onClick={getGifs}>Get gifs</button>
        <br/>
      </div>
    );
  
}

export default App;

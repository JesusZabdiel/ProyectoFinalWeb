import logo from './logo.svg';
import './App.css';
import CardMovie from './components/CardMovie';

function App() {
  
  return (
    <div className="App">
      <CardMovie titulo="End Game" calificacion={5}/>
    </div>
  );
}

export default App;

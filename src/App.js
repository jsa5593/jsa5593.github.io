import logo from './logo.svg';
import './App.css';
import Grid from './components/grid.js';
import What from './components/What.js';
import Here from "./components/Here.js";
import Why from "./components/Why";
import Where from "./components/Where";
import From from "./components/From";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Grid />
        <What />
        <Why />
        <From />
        <Where />
        <Here />
    </div>
  );
}

export default App;

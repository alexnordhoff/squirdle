import './App.css';
import GamePage from './components/gamepage';
import Header from './components/header'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <GamePage />
    </div>
  );
}

export default App;

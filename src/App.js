import logo from "./boladeplaya.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dale clic a la burbuja del chatbot en la parte inferior derecha para comenzar.
        </p>
      </header>
    </div>
  );
}

export default App;

import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

const where = "qui";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageComponent src="http://www.placedog.net/200" alt="dog" />
        <img
          src="http://placebear.com/200/200"
          className="App-logo"
          alt="logo"
        />
        <p>Esercizio React!</p>
        <ButtonComponent textToShow="bottone1" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React, clilcca {where}
        </a>
        <ButtonComponent textToShow="bottone2" />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import About from ".././src/components/About/about";
import TitlePage from ".././src/components/TitlePage/titlePage";
import Footer from "./components/Footer/Footer";
import KeyValues from "./components/KeyValues/KeyValues";
import Portfolio from ".././src/components/Portfolio/Portfolio";
function App() {
  return (
    <div className="App">
      <TitlePage  />
      <About />
      <KeyValues />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Header";
import ImagePanel from "./Components/ImagePanel";
import { SearchBar } from "./Components/SearchBar";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <nav>NavItems</nav>
      <ImagePanel />
    </div>
  );
}

export default App;

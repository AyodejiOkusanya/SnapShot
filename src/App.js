import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import ImagePanel from "./Components/ImagePanel";
import { SearchBar } from "./Components/SearchBar";
import { getImages } from "./api";

function App() {
  const [images, setImages] = useState(null);

  const getAll = async (query) => {
    const test = await getImages(query);
    setImages(test);
  };

  const handleSearch = (query) => {
    console.log("---------------------", query);
    // getAll(query);
  };

  useEffect(() => {
    // getAll("dogs");
  }, []);

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ImagePanel images={images} />
    </div>
  );
}

export default App;

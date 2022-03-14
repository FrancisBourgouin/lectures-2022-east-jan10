import { useEffect, useState } from "react";
import "./App.css";
import UrlList from "./components/UrlList";
import axios from "axios";

function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get("/api/v1/urls").then((res) => setUrls(res.data));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Tinyapp?</h1>
      </header>
      <UrlList urls={urls} />
    </div>
  );
}

export default App;

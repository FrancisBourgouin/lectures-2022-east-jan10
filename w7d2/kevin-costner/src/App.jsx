import PlantList from "./components/PlantList";
import Header from "./components/Header";

import plants from "./data/plantData";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <PlantList plants={plants} />
    </div>
  );
}

export default App;

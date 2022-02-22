import "./App.css";
import Header from "./components/Header";
import PlantForm from "./components/PlantForm";
import PlantList from "./components/PlantList";

import plants from "./data/plantData";

function App() {
  return (
    <div className="App">
      <PlantForm />
      <Header plantAmount={plants.length} />
      <PlantList plants={plants} />
    </div>
  );
}

export default App;

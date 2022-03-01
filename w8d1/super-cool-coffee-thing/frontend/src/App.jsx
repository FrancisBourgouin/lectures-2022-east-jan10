import "./App.scss";
import CoffeeDrinkForm from "./components/CoffeeDrinkForm";
import CoffeeDrinkList from "./components/CoffeeDrinkList";
import useCoffeeDrinks from "../hooks/useCoffeeDrinks";

function App() {
  const { coffeeDrinkListData, addCoffeeDrink } = useCoffeeDrinks();

  return (
    <div className="App">
      <header>
        <h1>SUPER COFFEE LIFE YEAH ☕</h1>
      </header>
      <main>
        <CoffeeDrinkForm onSubmit={addCoffeeDrink} />
        <CoffeeDrinkList coffeeDrinkListData={coffeeDrinkListData} />
      </main>
    </div>
  );
}

export default App;

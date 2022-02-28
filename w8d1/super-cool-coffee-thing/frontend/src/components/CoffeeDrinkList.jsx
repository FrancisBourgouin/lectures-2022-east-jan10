import CoffeeDrinkListItem from "./CoffeeDrinkListItem";

export default function CoffeeDrinkList(props) {
  const { coffeeDrinkListData } = props;

  const parsedDrinks = coffeeDrinkListData.map((drink) => (
    <CoffeeDrinkListItem key={drink.id} {...drink} />
  ));
  return <ul>{parsedDrinks}</ul>;
}

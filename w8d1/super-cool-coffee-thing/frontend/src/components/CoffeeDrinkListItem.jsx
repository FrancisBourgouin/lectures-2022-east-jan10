// const coffeeDrinkingEvent = {
//   id: "",
//   time: "",
//   amount: 0,
//   beans: "",
//   technique: "",
// };

export default function CoffeeDrinkListItem(props) {
  const { time, amount, beans, technique } = props;

  return (
    <li>
      <h1>
        {amount}ml of {beans} beans at {time}
      </h1>
      <h2>Using the {technique} technique</h2>
    </li>
  );
}

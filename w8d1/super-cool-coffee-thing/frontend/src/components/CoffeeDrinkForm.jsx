// const coffeeDrinkingEvent = {
//   id: "",
//   time: "",
//   amount: 0,
//   beans: "",
//   technique: "",
// };

import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CoffeeDrinkForm(props) {
  const [formData, setFormData] = useState({
    amount: "",
    beans: "",
    technique: "",
  });

  useEffect(() => {
    const watch = (event) => console.log(event);

    document.addEventListener("click", watch);

    return () => document.removeEventListener("click", watch);
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // const newFormData = { ...formData };
    // newFormData[name] = value;
    // setFormData(newFormData);

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const date = new Date();
    const time = date.toLocaleString();

    const coffeeData = { ...formData, id, time };

    props.onSubmit(coffeeData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="amount"
        onChange={handleChange}
        placeholder="Enter the amount of coffee"
      />
      <input
        type="text"
        name="beans"
        onChange={handleChange}
        placeholder="Enter the beans of coffee"
      />
      <select name="technique" onChange={handleChange}>
        <option value="">Please choose an option</option>
        <option value="French Press">French Press</option>
      </select>
      <button>Add coffee!</button>
    </form>
  );
}

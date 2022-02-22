import { useState } from "react";

export default function PlantForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [wateringInterval, setWateringInterval] = useState("");
  const [lastWatered, setLastWatered] = useState("");

  const handleNameChange = (event) => {
    if (event.target.value.length < 10) {
      setName(event.target.value);
    }
    console.log("YA YA YA", name);
  };

  console.log("YO YO YO", name);
  return (
    <form>
      <input type="text" name="name" onChange={handleNameChange} />
      <input type="text" name="type" />
      <input type="text" name="wateringInterval" />
      <input type="text" name="lastWatered" />
      <button type="submit">Add a plant</button>
    </form>
  );
}

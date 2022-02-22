import "./PlantListItem.css";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const calculateDayDifference = (lastWatered) => {
    const today = new Date();
    const lastWateredDate = new Date(lastWatered);

    const diffInMs = today.getTime() - lastWateredDate.getTime();

    const diffInDays = Math.floor(diffInMs / 1000 / 86400);

    return diffInDays;
  };

  const isWellWatered = calculateDayDifference(lastWatered) < wateringInterval;

  return (
    <li className={isWellWatered ? "good" : "bad"}>
      <h1>
        {name} - {type}
      </h1>
      <h2>{lastWatered}</h2>
      <span>green for good, red for dry</span>
    </li>
  );
}

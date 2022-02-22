export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;
  return (
    <li>
      <h1>
        {name} - {type}
      </h1>
      <h2>{lastWatered}</h2>
      <span>green for good, red for dry</span>
    </li>
  );
}

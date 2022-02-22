import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;
  const validPlantArray = Array.isArray(plants);
  // const listOfPlantListItems = [];
  // for (const plant of plants) {
  //   listOfPlantListItems.push(<PlantListItem key={plant.id} {...plant} />);
  // }

  const parsedPlantListItems =
    validPlantArray && plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return (
    <main>
      <h1>HI I'M PLANTLIST {[1, 2, 3, 4, 5, 6]}</h1>
      {!validPlantArray && <p>THERE IS NO PLANTS</p>}
      <ul>
        {/* <PlantListItem
          name={plants[0].name}
          type={plants[0].type}
          lastWatered={plants[0].lastWatered}
          wateringInterval={plants[0].wateringInterval}
        />
        <PlantListItem {...plants[1]} />
        <PlantListItem /> */}
        {parsedPlantListItems}
      </ul>
    </main>
  );
}

import carsData from "../../data/carsData";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return <div>Hatchback</div>;
}

export default Hatchback;

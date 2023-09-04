import carsData from "../../data/carsData";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return <div>Sport</div>;
}

export default Sport;

import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData";

function Hatchback() {
  const hatchbackCars = carsData.filter((car) => car.category === "hatchback");

  return (
    <div>
      <CarList data={hatchbackCars} />
    </div>
  );
}

export default Hatchback;

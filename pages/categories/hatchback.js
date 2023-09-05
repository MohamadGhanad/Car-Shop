import CarList from "../../components/templates/Carlist";
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

import CarList from "../../components/templates/Carlist";
import carsData from "../../data/carsData";

function Sport() {
  const sportCars = carsData.filter((car) => car.category === "sport");

  return (
    <div>
      <CarList data={sportCars} />
    </div>
  );
}

export default Sport;

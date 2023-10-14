import CarList from "../../components/templates/CarList";
import carsData from "../../data/carsData";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return (
    <div>
      <CarList data={sedanCars} />
    </div>
  );
}

export default Sedan;

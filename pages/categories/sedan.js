import carsData from "../../data/carsData";

function Sedan() {
  const sedanCars = carsData.filter((car) => car.category === "sedan");

  return <div></div>;
}

export default Sedan;

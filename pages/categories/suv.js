import carsData from "../../data/carsData";

function Suv() {
  const suvCars = carsData.filter((car) => car.category === "suv");

  return <div>Suv</div>;
}

export default Suv;

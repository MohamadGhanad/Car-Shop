import { useRouter } from "next/router"
import carsData from "../../data/carsData";

function CarDetail() {

const router = useRouter();
const id = router.query.CarId
const DetailOfCars = carsData[id -1]
console.log(DetailOfCars);


  return (
    <div>car - {id} </div>
  )
}

export default CarDetail
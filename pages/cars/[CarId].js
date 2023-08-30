import { useRouter } from "next/router"
import carsData from "../../data/carsData";
import CarDetails from "../../components/templates/CarDetails";

function CarDetail() {

const router = useRouter();
const id = router.query.CarId
const DetailOfCars = carsData[id -1]



  return (
    <div>
      <CarDetails {...DetailOfCars} />
    </div>
  )
}

export default CarDetail
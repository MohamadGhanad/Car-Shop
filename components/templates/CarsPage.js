import styles from "./CarsPage.module.css";
import carsData from "../../data/carsData"
import Card from "../module/Card";


function CarsPage() {
  return (
    <div className={styles.container}>
        {
            carsData.map(car => (
                <Card key={car.id} {...car}/>
            ))
        }
    </div>
  )
}

export default CarsPage
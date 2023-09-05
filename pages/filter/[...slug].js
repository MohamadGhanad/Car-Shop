import { useRouter } from 'next/router'
import carsData from '../../data/carsData';
import styles from './FilteredCars.module.css'
import CarList from '../../components/templates/CarList'

function FilteredCars() {

    const router = useRouter()
    const [min, max] = router.query.slug || [];

    const filters = carsData.filter(item => item.price > min && item.price < max)

    if (!filters.length) {
        return (
            <div className={styles.notFound}>
                <h2>Not Found Any Car In This Range</h2>
            </div>
         )
            
    }

  return (
    <div>
        <CarList data={filters} />
    </div>
  )
}

export default FilteredCars
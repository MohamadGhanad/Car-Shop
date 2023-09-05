import { useState } from 'react'
import styles from './SearchBar.module.css'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SearchBar() {

    const router = useRouter()

const [min, setMin] = useState("")
const [max, setMax] = useState("")

const searchHandler = () => {
    if (min && max) {
        router.push(`/filter/${min}/${max}`)
    }else {
        alert("Enter Min And Max Price !")
    }
}

  return (
    <div className={styles.container}>
        <div>
            <input placeholder='Enter min-price' value={min} onChange={e => setMin(e.target.value)} />
            <input placeholder='Enter max-price' value={max} onChange={e => setMax(e.target.value)}/>
        </div>
        <button onClick={searchHandler}>Search</button>
    </div>
    
  )
}

export default SearchBar
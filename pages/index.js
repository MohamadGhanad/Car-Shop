import React from 'react'
import CarsPage from '../components/templates/CarsPage'
import Categories from '../components/module/Categories'
import SearchBar from '../components/module/SearchBar'
import carsData from '../data/carsData'
import AllButton from '../components/module/AllButton'

 function Home() {

  const cars = carsData.slice(0, 3)

  return (
    <div>
        <SearchBar />
        <Categories />
        <AllButton />
        <CarsPage data={cars} />
    </div>
  )
}


export default Home
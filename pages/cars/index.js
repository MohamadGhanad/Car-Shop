import React from 'react'
import CarsPage from '../../components/templates/CarsPage'
import Categories from '../../components/module/Categories'
import SearchBar from "../../components/module/SearchBar"
import carsData from '../../data/carsData'
import AllButton from '../../components/module/AllButton'

function Cars() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  )
}

export default Cars
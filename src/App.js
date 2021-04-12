import { useState, useEffect } from 'react'

import Loading from './components/Loading'
import Cars from './components/Cars'

function App() {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState([])

  const removeCar = (id) => {
    const newCars = cars.filter((car) => car.id !== id)
    setCars(newCars)
  }

  const fetchCars = async () => {
    setLoading(true)

    try {
      const response = await fetch('/cars.json')
      const cars = await response.json()
      setLoading(false)
      setCars(cars)
      // console.log(Array.isArray(cars))
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCars()
  }, [])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (cars.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No cars left.</h2>
          <button className='btn' onClick={fetchCars}>
            Reset
          </button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Cars cars={cars} removeCar={removeCar} />
    </main>
  )
}

export default App

import { useState, useEffect } from 'react'
// import carData from './cars.json'

import Loading from './components/Loading'
import Cars from './components/Cars'

function App() {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState([])

  const fetchCars = async () => {
    setLoading(true)

    try {
      const response = await fetch('/cars.json')
      const cars = await response.json()
      setLoading(false)
      setCars(cars)
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
  return (
    <main>
      <Cars />
    </main>
  )
}

export default App

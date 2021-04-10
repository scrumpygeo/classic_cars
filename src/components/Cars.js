import React from 'react'
import Car from './Car'

const Cars = ({ cars, removeCar }) => {
  return (
    <section>
      <div className='title'>
        <h2>Select Classic Cars</h2>
      </div>
      <div>
        {cars.map((car) => {
          return <Car key={car.id} {...car} removeCar={removeCar} />
        })}
      </div>
    </section>
  )
}

export default Cars

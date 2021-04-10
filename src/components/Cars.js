import React from 'react'
import Car from './Car'

const Cars = ({ cars }) => {
  return (
    <section>
      <div className='title'>
        <h2>Our Classic Cars</h2>
      </div>
      <div>
        {cars.map((car) => {
          return <Car key={car.id} {...car} />
        })}
      </div>
    </section>
  )
}

export default Cars

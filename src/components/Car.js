import React from 'react'

const Car = ({ id, name, info, image, price }) => {
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <footer>
        <div>
          <h4>{name}</h4>
          <h4>£{price}</h4>
        </div>
      </footer>
    </article>
  )
}

export default Car

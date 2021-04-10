import React from 'react'

const Car = ({ id, name, info, image, price }) => {
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <footer>
        <div className='info'>
          <h4>{name}</h4>
          <h4 className='price'>£{price}</h4>
        </div>
        <p>{info}</p>
        <button className='btn-delete'>Not interested</button>
      </footer>
    </article>
  )
}

export default Car

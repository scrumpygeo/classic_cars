import React, { useState } from 'react'

const Car = ({ id, name, info, image, price }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <footer>
        <div className='info'>
          <h4>{name}</h4>
          <h4 className='price'>£{price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substr(0, 202)} ...`}
          <button
            className='btn-readMore'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className='btn-delete'>Not interested</button>
      </footer>
    </article>
  )
}

export default Car

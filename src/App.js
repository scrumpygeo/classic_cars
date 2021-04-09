import { useState } from 'react'

import Loading from './components/Loading'
import Cars from './components/Cars'
function App() {
  const [loading, setLoading] = useState(true)
  const [cars, setCars] = useState([])
  return (
    <div className='container'>
      <Cars />
    </div>
  )
}

export default App

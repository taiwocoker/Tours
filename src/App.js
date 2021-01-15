import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.netlify.app/api/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])
  if(loading){
    return (
      <main>
        <Loading />
      </main>
    )
  }
  
}

export default App

import React, { useEffect } from 'react'
import RNAffinidiModule, { Scanner } from 'affinidi-scanner'

const App = () => {
  useEffect(() => {
    console.log(RNAffinidiModule)
  })

  return <Scanner />
}

export default App

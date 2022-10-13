import React, { useEffect } from 'react'
import RNAffinidiModule, { Counter } from 'affinidi-scanner'

const App = () => {
  useEffect(() => {
    console.log(RNAffinidiModule)
  })

  return <Counter />
}

export default App

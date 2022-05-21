import { useState } from 'react'
import logo from './logo.svg'
import './App.scss'
import RouterView from "./router"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <RouterView/>
    </div>
  )
}

export default App

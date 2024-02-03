import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <dev className="App">
      <h1>Css no React</h1>
      <MyComponent />
      <p>pegou css do componente</p>
    </dev>
  )
}

export default App

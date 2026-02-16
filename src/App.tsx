import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Components/Home.tsx"
import Product from "./Components/Products.tsx"
import Header from "./Components/Header.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <p>
    <Header/>
    <p>Welcome to our IntoreShop customer is a King.</p>
    </p>
  )
}

export default App

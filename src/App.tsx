import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Components/Home.tsx"
import Product from "./Components/Products.tsx"
import Header from "./Components/Header.tsx"
import AppRoute from "./AppRoutes/AppRoutes.tsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <p>
    <AppRoute/>
    <Header/>
    </p>
  )
}

export default App

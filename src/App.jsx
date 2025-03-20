import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Link, Routes,Route } from 'react-router-dom'
import App1 from "./components/App1";
import App2 from "./components/App2";

function App() {
  const [count, setCount] = useState(0)

  return (
  <BrowserRouter>
  <div>
    <Link to="App1">App1</Link>
    <Link to="App2">App2</Link>
    <hr></hr>
  </div>
  <div>
    <Routes>
      <Route index element={<App1/>}/>
      <Route path="App1" element={<App1/>}/>
      <Route index element={<App2/>}/>
      <Route path="App2" element={<App2/>}/>


    </Routes>
  </div>
  </BrowserRouter>

  )
}

export default App

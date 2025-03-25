import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter,Link, Routes,Route } from 'react-router-dom'
import App1 from "./components/App1";
import App2 from "./components/App2";
import App3 from "./components/App3";
import App4 from "./components/App4";
import App5 from "./components/App5";
import App6 from "./components/App6";

function App() {
  return (
  <BrowserRouter>
  <div>
    <Link to="App1">App1-</Link>
    <Link to="App2">App2-</Link>
    <Link to="App3">App3-</Link>
    <Link to="App4">App4-</Link>
    <Link to="App5">App5-</Link>
    <Link to="App6">App6</Link>




    <hr></hr>
  </div>
  <div>
    <Routes>
      <Route index element={<App1/>}/>
      <Route path="App1" element={<App1/>}/>
      <Route index element={<App2/>}/>
      <Route path="App2" element={<App2/>}/>
      <Route index element={<App3/>}/>
      <Route path="App3" element={<App3/>}/>
      <Route index element={<App4/>}/>
      <Route path="App4" element={<App4/>}/>
      <Route index element={<App5/>}/>
      <Route path="App5" element={<App5/>}/>
      <Route index element={<App6/>}/>
      <Route path="App6" element={<App6/>}/>



    </Routes>
  </div>
  </BrowserRouter>

  )
}

export default App

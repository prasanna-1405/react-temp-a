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
import App7 from "./components/App7";
import App8 from './components/App8';
import App9 from './components/App9';
import App10 from './components/App10';
import App11 from './components/App11';
import App12 from './components/App12';
import App13 from './components/App13';
import App14 from './components/App14';
import App15 from './components/App15';



function App() {
  return (
  <BrowserRouter>
  <div>
    <Link to="App1">App1-</Link>
    <Link to="App2">App2-</Link>
    <Link to="App3">App3-</Link>
    <Link to="App4">App4-</Link>
    <Link to="App5">App5-</Link>
    <Link to="App6">App6-</Link>
    <Link to="App7">App7-</Link>
    <Link to="App8">App8-</Link>
    <Link to="App9">App9-</Link>
    <Link to="App10">App10-</Link>
    <Link to="App11">App11-</Link>
    <Link to="App12">App12-</Link>
    <Link to="App13">App13-</Link>
    <Link to="App14">App14-</Link>
    <Link to="App15">App15</Link>










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
      <Route index element={<App7/>}/>
      <Route path="App7" element={<App7/>}/>
      <Route index element={<App8/>}/>
      <Route path="App8" element={<App8/>}/>
      <Route index element={<App9/>}/>
      <Route path="App9" element={<App9/>}/>
      <Route index element={<App10/>}/>
      <Route path="App10" element={<App10/>}/>
      <Route index element={<App11/>}/>
      <Route path="App11" element={<App11/>}/>
      <Route index element={<App12/>}/>
      <Route path="App12" element={<App12/>}/>
      <Route index element={<App13/>}/>
      <Route path="App13" element={<App13/>}/>
      <Route index element={<App14/>}/>
      <Route path="App14" element={<App14/>}/>
      <Route index element={<App15/>}/>
      <Route path="App15" element={<App15/>}/>





    </Routes>
  </div>
  </BrowserRouter>

  )
}

export default App

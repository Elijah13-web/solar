// import React from 'react'

// const App = () => {
//   return (
//     <div className='bg-black py-24 text-white'>App</div>
//   )
// }

// export default 



import { useState } from 'react'
import Africa from "./pages/Africa"
import Connect from "./pages/Connect"
import Navbar from "./pages/Navbar"
import Energy from "./pages/Energy"
import Areas from "./pages/Areas"
import Companies from "./pages/Compaines"
import Technicians from "./pages/Technicians"
import Customers from "./pages/Customers"
import Save from "./pages/Save"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Connect/>
        <Africa/>
        <Energy/>
        <Areas/>
        <Companies/>
        <Technicians/>
        <Customers/>
        <Save/>
        <Footer/>
    </div>
    </>
  )
}

export default App

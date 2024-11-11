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
// import Energy from './Pages/Energy'
import Areas from "./pages/Areas"
import Companies from "./pages/Compaines"
// import Technicians from './Pages/Technicians'
import Customers from "./pages/Customers"
// import Save from './Pages/Save'
// import Footer from './Pages/Footer'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Connect/>
        <Africa/>
        {/* <Energy/> */}
        <Areas/>
        <Companies/>
        {/* <Technicians/> */}
        <Customers/>
        {/* <Save/> */}
        {/* <Footer/> */}
    </div>
    </>
  )
}

export default App

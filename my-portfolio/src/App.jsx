import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <Home />
      </div>
    </>
  )
}

export default App
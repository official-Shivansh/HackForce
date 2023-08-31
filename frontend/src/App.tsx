import React from 'react';
import Navbar from "./Component/Navbar"
import './App.css';
import Footer from './Component/Footer';
import AllRoutes from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <AllRoutes/>
   <Footer/>
   </div>
    );
}

export default App;

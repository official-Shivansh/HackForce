import React from 'react';

import './App.css';
import Footer from './Component/Footer';
import AllRoutes from './Routes/AllRoutes';
import { NavBar } from './Component/Navbar';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
   {/* <NavBar/> */}
   {/* <AllRoutes/>
   <Footer/> */}
   <Home />
   </div>
    );
}

export default App;

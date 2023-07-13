import React from 'react'
import Navbar from '../components/Navbar'
import Farmer from "../assets/Farmer.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      <Navbar/>
      <div className="home" >
      <div class="container">
            <img src={Farmer}  alt= "Farmer" />
      <div class="text">
        <h3>Reducing Death Rate of Farmers</h3>
      </div>
             </div>
          
          </div>
          </div>                                                                                                      
  )
}

export default Home;
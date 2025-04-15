import React from "react";
import RoundedButton from "../../Components/Buttons/RoundButton"; // Assuming the RoundedButton component
import carIcon from "../../Assets/car-icon.png";
import HouseIcon from "../../Assets/house-icon.png"
import "./Home.module.css"

function Home() {
  return (
    <div className="container">
      <h1 className="text-center mb-4">Explore Our Products</h1>

      <div className="sectionbuttons">
        <RoundedButton 
          icon={carIcon} 
          text="Click me" 
          onClick={() => alert("Button 1 clicked!")} 
        />
        <RoundedButton 
          icon={HouseIcon} 
          text="Click me" 
          onClick={() => alert("Button 2 clicked!")} 
        />
      </div>
    </div>
  );
}

export default Home;

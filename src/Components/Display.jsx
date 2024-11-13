import React from 'react'
import "../../src/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Display() {
  return (
    <div className="bg-dark  display-image">
      <img
        className="display-images"
        src="https://cdnprod.mafretailproxy.com/assets/images/BLN_NOV_ICON_1_4fecbb77b1.png"
        alt="shopping-image"
        height='70px'
      />
      <h2>Great Quality! Lower Prices!!</h2>
    </div>
  );
}

export default Display

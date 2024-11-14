import React from 'react'
import "../../src/App.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Display() {
  return (
    <div className="display-image shadow">
      <img
        className="display-images"
        src="https://cdnprod.mafretailproxy.com/assets/images/BLN_NOV_ICON_1_4fecbb77b1.png"
        alt="shopping-image"
        height="70px"
      />
      <h2>Shopping Here May Lead to Impromptu Dance Parties!!</h2>
      <p className="navbar-light bg-light">
        <img
          src="../../src/assets/shopping_cart_checkout_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
          alt="shopping cart"
          width="42px"
        />
        Account
      </p>
      <p className="navbar-light bg-light">
        <img
          src="../../src/assets/shopping_cart_checkout_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.svg"
          alt="shopping cart"
          width="42px"
        />
        Cart
      </p>
      <p className="navbar-light bg-light">
        <img
          src="../../src/assets/help_39dp_5985E1_FILL0_wght400_GRAD0_opsz40.svg"
          alt="shopping cart"
          width="42px"
        />
        Help
      </p>
    </div>
  );
}

export default Display

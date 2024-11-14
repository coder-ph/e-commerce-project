import React from 'react'
import NavBar from './NavBar';
import "../../src/App.css";

function Promo() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main className="shadow-lg p-3 mb-5 bg-body rounded promo">
        <h1>Sign up for Promo Deals!!</h1>
        <div className='login'>
          <form>
            <label htmlFor="">Contact</label>
            <input
              type="tel"
              name="telephone"
              placeholder="Mobile number +254..."
            />{" "}
            <br /> <br />
            <label htmlFor="">Email </label>
            <input
              type="email"
              name="email"
              placeholder="Enter a valid email"
            />{" "}
            <br /> <br />
            <label htmlFor="">Adress </label>
            <input
              type="adress"
              name="adress"
              placeholder="Enter your adress"
            />
            <br /> <br />
            <button className="btn btn-primary">Submit Details</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Promo

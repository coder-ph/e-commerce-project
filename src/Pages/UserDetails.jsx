import React from 'react'
import NavBar from './NavBar';

function UserDetails() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="shadow-lg p-3 mb-5 bg-body rounded">
        <h1>Sign up for free delivery</h1>
      </div>
    </div>
  );
}

export default UserDetails

import React from 'react'
import NavBar from './NavBar'

function Login() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <h1>Get access to over 1,000 quality products</h1>
      <form action="submit">
        <div>
          <label>
            Enter name <br />{" "}
          </label> <br/>
          
          <input
            type="email"
            name="name"
            placeholder="Enter a valid email adress"
            required
          />
        </div>
        <br />
        <div>
          <label>
            {" "}
            Enter password <br />{" "}
          </label> <br />
          <input
            type="password"
            name="password"
            placeholder="enter password"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Login

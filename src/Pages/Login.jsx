import React from 'react'
import NavBar from './NavBar'

function Login() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <div className="shadow-lg p-3 mb-5 bg-body rounded promo">
        <h1>Get access to 1,000+ products</h1>
        <div className='login'>
          <form action="submit">
            <div>
              <label>
                Enter name <br />{" "}
              </label>{" "}
              <br />
              <input
                className="input"
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
              </label>{" "}
              <br />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="enter password"
                required
              />
            </div>
            <button className='btn btn-primary logbtn'>Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login

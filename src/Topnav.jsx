// Bar.jsx
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./index.css"; // Import your CSS file
import Login from "./Login"; // Import the Login component
// import Sign_Up from "./Sign_Up"; // Import the Signup component

function Bar() {

  const [showLogin, setShowLogin] = useState(false);
  

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  // const openSign_Up = () => {
  //   // setShowSignup(true);
  //   setShowLogin(false);
  // };

  return (
    <div className="nav">
      <div className="wrap1">
        <h4>Dev@Deakin</h4>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <button >POST</button>
            </li>
            <li>
              <button onClick={toggleLogin}>
                LOGIN
              </button>
            </li>
            {/* <li>
              <a href="#" onClick={openSign_Up}>
                SIGN UP
              </a>
            </li> */}
          </ul>
        </div>
      </div>

      {showLogin && <Login toggleLogin={toggleLogin} />}
      {/* {showSignup && <Sign_Up onClose={() => setShowSignup(false)} />} */}
    </div>
  );
}

export default Bar;



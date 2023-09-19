import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
// import image from "./images/gross.webp";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);
    
  };

  return (
    <div className="body">
    <div className="login-container">
      {/* <img src={image} alt="Grocery Store" /> */}
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="loginbutton">Login</button>
      </form>

      
      <p>
        Don't have an account? <Link className="link" to="/signup">Sign Up</Link>
      </p>
    </div>
    </div>
  );
}
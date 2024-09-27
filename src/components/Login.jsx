import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  // State to store form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data to be sent to API
    const loginData = {
      email,
      password,
    };

    try {
      // POST request to the API
      const response = await fetch("local:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Handle response from the API
      if (response.ok) {
        const result = await response.json();
        // Redirect or handle success
        console.log("Login successful:", result);
        window.location.href = "/dashboard"; // Redirect to dashboard
      } else {
        console.error("Login failed:", response.statusText);
        // Handle error
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="login-container" id="login-container">
      <div className="login-form-container sign-in-container">
        <form onSubmit={handleSubmit}>
          <h1 className="login-title">Sign in</h1>
          <br />
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state
          />
          <a href="#" className="login-forgot">
            Forgot your password?
          </a>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

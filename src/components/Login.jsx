import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // To navigate after login
import "./Login.css";

const Login = ({ onLogin }) => {
  // State to store form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // To store error messages
  const navigate = useNavigate(); // Hook to programmatically navigate

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
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // Handle response from the API
      if (response.ok) {
        const result = await response.json();

        // Store token in localStorage
        localStorage.setItem("authToken", result.token);

        console.log("Login successful:", result);

        // Call the parent callback to update isLoggedIn state (optional)
        onLogin();

        // Redirect to dashboard or another route after successful login
        navigate("/"); // Change "/dashboard" to the path you want
      } else {
        const errorMessage = await response.text();
        console.error("Login failed:", errorMessage);
        setError("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-container" id="login-container">
        <div className="login-form-container sign-in-container">
          <form onSubmit={handleSubmit}>
            <h1 className="login-title">Sign in</h1>
            {error && <p className="error-message">{error}</p>}
            <br />
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="login-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

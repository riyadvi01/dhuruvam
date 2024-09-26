import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className="container-l" id="contanier">
            <div className="form-container sign-in-container">
                <form action="/dashboard">
                    <h1>Sign in</h1>
                    <br />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button>Sign In</button>
                </form>
            </div>
        </div>
    )
}
export default Login;   
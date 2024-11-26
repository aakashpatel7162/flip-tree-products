import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import './auth.style.css'; 

export default function Auth() {
  const [userWantToSignUp, setUserWantToSignup] = useState(false);

  console.log("Rendering:", userWantToSignUp ? "Signup" : "Login");

  return (
    <div className="auth-container">
      <div className="form-side">
      
          {userWantToSignUp ? (
            <Signup setUserWantToSignup={setUserWantToSignup} />
          ) : (
            <Login setUserWantToSignup={setUserWantToSignup} />
          )}
      </div>

      <div className="image-side">
        <img
          src="https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Auth"
        />
      </div>
    </div>
  );
}

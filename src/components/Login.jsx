import React from "react";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    console.log(payload);
    fetch("http://localhost:8888/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((res) => {
        
        console.log(res)})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="User email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>SignUp</button>
    </div>
  );
};

export default Login;

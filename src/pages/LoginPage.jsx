import React, { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black rounded-2xl px-4 py-3 h-5/12 w-1/4 mx-auto my-52">
      <h1 className="font-bold text-3xl my-5">Login</h1>
      <div className="flex flex-col items-center justify-center px-3 py-2 text-black font-bold gap-3 my-5 w-full">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full border-2 px-3 py-2 rounded my-5"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full border-2 px-3 py-2 rounded "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="px-5 py-4 bg-green-500 border-2 rounded-bl-2xl rounded-tr-2xl font-bold w-full"
        onClick={() => {
          console.log(email, " ", password);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;

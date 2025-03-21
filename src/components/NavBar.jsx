import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-5 bg-green-500 text-white w-full rounded-2xl font-bold text-2xl">
      <h3>Home</h3>
      <div className="flex justify-center items-center gap-5">
        <h3>Login</h3>
        <h3>Sign Up</h3>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";
function NavbarComponent() {
  return (
    <div className="container mx-auto flex justify-between h-[100px] items-center">
      <h1 className="text-white uppercase text-2xl font-bold">Redux</h1>

      <ul className="flex gap-5 text-white">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        {localStorage.hasOwnProperty('redux_user')?     <li>
          <NavLink to={"/profile"}>Profile</NavLink>
        </li>: <li>
          <NavLink to={"/register"}>Register</NavLink>
        </li>}
       
   
      </ul>
    </div>
  );
}

export default NavbarComponent;

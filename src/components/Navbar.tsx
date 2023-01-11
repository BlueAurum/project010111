import React from "react";
import "./navbar.css";
import { useAppSelector } from "../hooks/useTypedHooks";
import { authState } from "../store/slices/auth";

const Navbar = () => {
  const { auth } = useAppSelector(authState);
  return (
    <div className="navbar">
      {auth ? (
        <ul></ul>
      ) : (
        <ul>
          <li>login</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

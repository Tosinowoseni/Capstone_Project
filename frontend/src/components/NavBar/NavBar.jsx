import React from "react";
import { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Online Fashion Shop</b>
          </Link>
        </li>
        <li>
          
          <ul>
            <li><a></a></li>
          </ul>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
      <ul>
        <li><a>Mens</a></li>
      </ul>
    </div>
  );
};

export default Navbar;

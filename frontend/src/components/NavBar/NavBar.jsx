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
        <Link to='/Mens'>
          <li><a>Mens</a></li>
        </Link>
        <Link to='/Womens'>
        <li><a></a>Womens</li>
        </Link>
        <Link to='/Kids'>
        <li><a>Kids</a></li>
        </Link>
        <li><a>Menu</a></li>

        <button onClick={()=> navigate("/Mens")}></button>

      </ul>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import cart from '../../images/25619.png'


const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <div className="image-wrapper"><img src={cart} width={30} alt="" /></div>
      <ul className="app_navbar-links">
        <li className="p_opensans"><a href="#home"></a>Cart</li>
        <li className="p_opensans"><a href="#about"></a>About</li>
        <li className="p_opensans"><a href="#products"></a>Contact</li>
        <li className="p_opensans"><a href="#awards"></a>Awards</li>
      </ul>
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Online Fashion Store</b>
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
        <Link to='/Menu'>
        <li><a>Menu</a></li>
        </Link>
        <Link to='/products'>
          <li><a>Product</a></li>
        </Link>
        <button onClick={()=> navigate("/Mens")}></button>

      </ul>
      
    </div>
  );
};

export default Navbar;

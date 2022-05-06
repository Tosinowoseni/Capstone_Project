let searchbar = document.queryselector('#search-bar');
let searchbox = document.queryselector('.search-box');
let shop = document.queryselector('#shop-cart');
let shopcart = document.queryselector('.shopping-cart');
let menubar = document.queryselector('#menubar');
let mynav = document.queryselector('#navbar');





searchbar.onclick = () =>{
    searchbox.classlist.toggle('active')
}
shop.onclick = () =>{
    shopcart.classlist.toggle('active');
}

menubar.onclick
    mynav.classlist.toggle('active');








     
//     </link>
//     </ul>
//     <li><a></a>Home</li>
//     {user ? (
//       <button onClick={logoutUser}>Logout</button>
//     ) : (
//       <button onClick={() => navigate("/login")}>Login</button>
//     )}
//   </li>
// </ul>
// </div>
// );
// };

// export default Navbar;







// import React from "react";
// import { useContext } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import AuthContext from "../../context/AuthContext";
// import "./NavBar.css";

// const Navbar = () => {
//   const { logoutUser, user } = useContext(AuthContext);
//   const navigate = useNavigate();
//   return (
//     <div className="navBar">
//       <ul>
//         <li className="brand">
//           <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//             <b>Online Fashion Shop</b>
//           </Link>
//         </li>
//         <li>
//           <ul>
//             <link to='/'>

//               <li><a></a>Home</li> 
//             </link>
          
//           </ul>
//           {user ? (
//             <button onClick={logoutUser}>Logout</button>
//           ) : (
//             <button onClick={() => navigate("/login")}>Login</button>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MensPage from "./pages/MensPage/MensPage";
import WomensPage from "./pages/WomensPage/WomensPage";
import KidsPage from "./pages/KidsPage/KidsPage";
import MenuPage from "./pages/MenuPage/MenuPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import ProductPage from "./pages/ProductPage/ProductPage";
function App() {
  return (
    <div classname="App">
      <img src="" />
        <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="Menu" element={<MenuPage />} />
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/womens"element={<WomensPage />} />
        <Route path="/mens" element={<MensPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">AuraWord</div>
      <nav className="nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink to="/categories" className="nav-link">
          Shop
        </NavLink>
        <NavLink to="/blogs" className="nav-link">
          Blog
        </NavLink>
        <NavLink to="/contact" className="nav-link">
          Contact
        </NavLink>
        <NavLink to="/auth/login" className="nav-link">
          Login
        </NavLink>
      </nav>
      <div className="search-cart">
        <NavLink to="/orders" className="cart-link">
          <i class="bi bi-cart"></i>
        </NavLink>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <button>
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <li>
            <img/><p>img placeholder</p>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/register-seller">Register Seller</Link>
        </li>
        <li>
          <Link to="/register-buyer">Register Buyer</Link>
        </li>
        <li>
          <Link to="/register-property">Register Property</Link>
        </li>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        <li>
            <Link to="/about-us">About us</Link>
        </li>
        <li>
            <Link to="/sign-in">Sign in</Link>
        </li>
    </nav>
  )
}

export default Navbar;
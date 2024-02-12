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
<<<<<<< HEAD
          <Link to="/properties/some">Properties</Link>
=======
          <Link to="/properties/all">Properties</Link>
>>>>>>> 91b21f43a42d0b5494482542b65cc7cc5269d4e0
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
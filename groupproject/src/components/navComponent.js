import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/register-seller">Register Seller</Link>
      </li>
     <li>
        <Link to="/register-buyer">Register Buyer</Link>
      </li>
      <li>
        <Link to="/properties">Properties</Link>
      </li> 
    </nav>
  )
}

export default Navbar;
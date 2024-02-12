import React from 'react';
// Run npm install react-router-dom if you have issues with npm start 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from './components/layoutComponent';
import './styles/layout.css';
import Buyerform from './components/Buyerform';
import HomeSearch from './components/HomeSearch.js'
import DisplayProperties from './components/DisplayProperties';
// Import page components below
import PropertyForm from './components/propertyForm.js';
import DisplaySelectedProperty from './components/DisplaySelectedProperty.js';
import DisplaySellers from './components/DisplaySellers.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Routes>
          {/* Base route for every page including the layout component template */}
          <Route path="/" element={<Layout/>}> 
            {/* Nested paths for each page component (E.g. Buyer / Seller pages) */}
            <Route
            path="home"
            element= {[<HomeSearch />]}
            />
            <Route 
            path="register-seller"
            element={<DisplaySellers user="Sellers"/>}
            />
            <Route
            path="register-buyer"
            element= {[<Buyerform />, <DisplaySellers user="Buyers"/>]}
            />
            <Route
            path="properties/:query"
            element={<DisplayProperties/>}
            />
            <Route path='register-property' element={<PropertyForm/>}></Route>
            <Route
            path="about-us"
            element={<>about us</>}
            />
            <Route path='properties/view/:property_id' element={<DisplaySelectedProperty/>}></Route>
            <Route
            path="sign-in"
            element={<>sign in</>}
            />
          </Route>
        </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

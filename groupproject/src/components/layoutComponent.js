import React from 'react';
import Navbar from './navComponent.js';
import HomeSearch from './HomeSearch.js';
import Footer from './Footer.js';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
    <header className="layoutHeader">
        <Navbar/>
    </header>
    <main>
        <section className="sectionOne">
            <Outlet/>
            <HomeSearch />
        </section>
    </main>
    <footer>
        <Footer />
    </footer>
    </>
  )
}

export default Layout;
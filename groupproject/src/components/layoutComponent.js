import React from 'react';
import Navbar from './navComponent.js';
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
        </section>
    </main>
    <footer>
        
    </footer>
    </>
  )
}

export default Layout;
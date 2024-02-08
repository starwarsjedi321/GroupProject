import React from 'react';
import Navbar from './navComponent.js';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <header class="layoutHeader">
        <Navbar/>
    </header>
    <main>
        <section class="sectionOne">
            <Outlet/>
        </section>
    </main>
    <footer>
        
    </footer>
    </>
  )
}

export default Layout;
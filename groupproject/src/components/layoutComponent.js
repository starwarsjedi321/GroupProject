import React from 'react';
import Navbar from './navComponent.js';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <header class="layoutHeader">
        <Navbar/>
    </header>
    <main>
        <section class="sectionOne">
            
        </section>
    </main>
    </>
  )
}

export default Layout;
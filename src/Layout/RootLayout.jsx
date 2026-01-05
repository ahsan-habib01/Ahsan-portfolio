import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/Static/ScrollToTop';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Navbar />
      </header>

      <main className="">
        <Outlet />
      </main>

      <footer>
        <Footer />
        <ScrollToTop></ScrollToTop>
      </footer>
    </div>
  );
};

export default RootLayout;

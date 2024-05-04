import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import Career from '../pages/Career';
import Media from '../pages/Media';
import Resource from '../pages/Resource';
import Contact from '../pages/Contact';

const Navpage = () => {
  return (
    <div >
      <section >
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/resources" element={<Resource />} />
          <Route path="/media" element={<Media />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </section>
    </div>
  );
};

export default Navpage;

import React from 'react';
import  "./_reset.scss"
import  "./_base.scss"
import Footer from './../Footer/Footer'
import Slider from './../Slider/Slider'
import Categories from './../Categories/Categories'

function App() {
  return (
    <main>
      <Slider/>
      <Categories/>
      <Footer/>
    </main>
  );
}

export default App;

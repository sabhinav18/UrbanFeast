

import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      {/* Hero Section */}
      <section id="home">
        <Header />
      </section>

      {/* Menu Section */}
      <section id="menu">
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category} />
      </section>

      {/* App Download Section */}
      <section id="app">
        <AppDownload />
      </section>

      {/* Contact Section */}
      <section id="contact" >
        <footer />
        
      </section>
    </div>
  )
}

export default Home

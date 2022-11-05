import React from 'react'
import './Home.css'
import Header from "../../component/header/Header";
import Button from "../../component/button/Button";
import Social from "../../component/social/Social";
import Footer from "../../component/footer/Footer";

const Home = () => {
  return (
    <div className="link__tree">
      <Header />
      <Button />
      <Social />
      <Footer />
    </div>
  )
}

export default Home
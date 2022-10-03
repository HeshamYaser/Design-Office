import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Services from '../Services/Services'
import Work from '../Work/Work'

const Home = () => {
  return (
    <div>
      <Header />
      <Body />
      <Services />
      <Work />
      <Footer />
    </div>
  )
}

export default Home
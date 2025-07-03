import React, { Component } from 'react'
// Components
import Hero from '../components/Hero'
import Popular from '../components/Popular'
import Genre from '../components/Genre'
import Trending from '../components/Trending'
import NewRelease from "../components/NewRelease"
import Footer from '../components/Footer'

// pages


// assets



const Home = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Genre />
      <Trending />
      <NewRelease />
      <Footer />
    </div>
  )
}

export default Home

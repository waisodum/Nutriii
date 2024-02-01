'use client'

import React, { useContext, useState } from 'react'
import { myContext } from '../../Helper/Context'
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Footer from '@/Components/Footer';

function Home() {

  const { userData, setUserData } = useContext(myContext);
  const firstName = userData; //Add userData.firstName after Auth is integrated

  return (

    <div className='body-main'>

      <Navbar/>

      <Hero/>

      <Footer/>

    </div>

  )
}

export default Home
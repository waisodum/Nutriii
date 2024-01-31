'use client'

import React, { useContext, useState } from 'react'
import { myContext } from '../../Helper/Context'
import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';

function Home() {

  const { userData, setUserData } = useContext(myContext);
  const firstName = userData; //Add userData.firstName after Auth is integrated

  return (

    <div>

      <Navbar />
      {/* <div className='h-[40vw] w-[98vw] bg-black'></div> */}
      <Hero/>
      {/* <div className='h-[40vw] w-[98vw] bg-black'></div> */}

    </div>

  )
}

export default Home
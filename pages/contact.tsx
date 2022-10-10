import Head from 'next/head';
import React from 'react'
import About from '../components/About'
import Contact from '../components/Contact'


const contact = () => {
  return (
    <div >
            <Head>
        <title>Contact</title>
      </Head>
        <About/>
        <Contact/>

    </div>
  )
}

export default contact
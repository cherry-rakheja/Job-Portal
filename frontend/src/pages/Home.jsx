import React from 'react'
import Navbar from '../components/common/Navbar'
import Heroimg from '../components/microcomponents/Heroimg'
import Searchbar from '../components/macrocomponents/Searchbar';
import Categorysection from '../components/macrocomponents/Categorysection';
import Skillssection from '../components/macrocomponents/Skillssection';

const Home = () => {
  return (
    <div className=' min-h-screen max-w-full px-7 py-4  text-white bg-bgdark '>
      <Navbar/>
      <Heroimg/>
      <Searchbar/>
      <Categorysection/>
      <Skillssection/>
    </div>

    
  )
}

export default Home

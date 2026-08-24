import React from 'react'
import Navbar from '../components/common/Navbar'
import Heroimg from '../components/microcomponents/Heroimg'
import Searchbar from '../components/macrocomponents/Searchbar';
import Categorysection from '../components/macrocomponents/Categorysection';
import Skillssection from '../components/macrocomponents/Skillssection';
import WhyChooseUs from '../components/macrocomponents/WhyChooseUs';
import LatestJob from '../components/macrocomponents/LatestJob';
import CTASection from '../components/macrocomponents/CTASection';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className=' min-h-screen max-w-full px-7 py-4  text-white bg-bgdark '>
      <Navbar/>
      <Heroimg/>
      <Searchbar/>
      <Categorysection/>
      <LatestJob/>
      <Skillssection/>
      <CTASection/>
      <WhyChooseUs/>
      <Footer/>
      
    </div>

    
  )
}

export default Home

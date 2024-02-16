import React from 'react'
import Navbar from '../Components/Navbar.js'
import Header from '../Components/Header.js'
import Resume from '../Components/Resume.js'
import Testimonal from '../Components/Testimonal.js'
import Jobsearch from '../Components/Jobsearch.js'
import Personalbranding from '../Components/Personalbranding.js'
import Profilemanagement from '../Components/Profilemanagement.js'
import Footer from '../Components/Footer.js'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Resume />

      <Jobsearch />
      <Personalbranding />
      <Profilemanagement />
      <Testimonal />

      <Footer />
    </div>
  );
}

export default Home
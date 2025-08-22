//  import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Banner from './Components/Banner/Banner'
// import Popular from './Components/Popular Categories/Popular'
// import Testimonials from './Components/Testimonials/Testimonials'
// import Footer from './Components/Footer/Footer'
// import LoginPopup from './Components/LoginPopup/LoginPopup'
 
//  const App = () => {
//   const[showLogin,setShowLogin] = useState(false);
//    return (
//     <>
//     {showLogin?<LoginPopup/>:<></>}
//      <div>
//        <Navbar setShowLogin={setShowLogin}/>
//        <LoginPopup/>
//        <Banner/>
//        <Popular/>
//        <Testimonials/>
//        <Footer/>
//      </div>
//      </>
//    )
//  }
 
//  export default App
 

import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Popular from './Components/Popular Categories/Popular';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import LoginPopup from './Components/LoginPopup/LoginPopup';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {/* Conditionally render popup */}
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <div>
        <Navbar setShowLogin={setShowLogin} />
        <Banner />
        <Popular />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App;

import React from 'react';
import '../styles/Home.css'; 
import Products from '../components/Products';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  

  return (
    <div className="HomePage">
      
      Banner */
      <div className="home-banner">
        <img src={"https://th.bing.com/th/id/OIP.v_ZGXpxRb68veKXYBcnYdgHaCx?w=316&h=131&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"} alt="Home Banner" />
      </div>

      
      {/* Products */}
      <div id='products-body'></div>
      <Products category='all' />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

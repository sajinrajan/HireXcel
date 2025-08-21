import React from 'react';
import './Banner.css';
import interviewImg from '../../assets/assets/GettyImages.png';

const Banner = () => {
  return (
    <div className="banner">
      {/* Background Image */}
      <div className="image-section">
        <img src={interviewImg} alt="Interview" className="banner-image" />
      </div>

      {/* Text & Search Overlay */}
      <div className="banner-text">
        <h1>Our freelancers will take it from here</h1>
        <p>Find freelancers, services, and opportunities easily.</p>

        {/* Search */}
        <div className="search-section">
          <input type="text" placeholder="Search services..." />
          <button className="search-button">Search</button>
        </div>

        {/* Sub-collocations */}
        <div className="sub-tags">
          <div className="sub-collocation">Web Design</div>
          <div className="sub-collocation">Website Development</div>
          <div className="sub-collocation">Shopify dropshipping</div>
          <div className="sub-collocation">Full stack developer</div>
          <div className="sub-collocation">Custom Website</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

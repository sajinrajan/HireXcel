import React from 'react';
import './Popular.css';
import pexels from '../../assets/assets/pexels.jpg';
import design from '../../assets/assets/design.jpg';
import Developer from '../../assets/assets/website-development-life-cycle.jpg';
import shop from '../../assets/assets/shop.png';
import istockphoto from '../../assets/assets/istockphoto.jpg';
import DesignSiteImg from '../../assets/assets/fullStack.jpeg';


const Popular = () => {
  return (
    <div className="popular-categories">
      {/* Header */}
        <div className="popular-header">
            <h1>Popular Categories</h1>
            <p>Explore the most sought-after categories by our users.</p>
        </div>
      {/* Categories Grid */}
      <div className="scrollbar">
            <div className="categories-grid">
                <div className="category-card">
                <div className="img-wrapper">
                    <img src={pexels} alt="Web Design" className="category-img" />
                </div>
                <h2>Online store</h2>
                <p>"Launch your online store with ease, growth, and customer trust.".</p>
                </div>

                <div className="category-card">
                <div className="img-wrapper">
                    <img src={design} alt="Website Development" className="category-img" />
                </div>
                <h2>Website Design</h2>
                <p>Crafting modern, user-friendly websites that inspire trust and engagement.</p>
                </div>

                <div className="category-card">
                <div className="img-wrapper">
                    <img src={Developer} alt="Website Development" className="category-img" />
                </div>
                <h2>Website Development</h2>
                <p>Build robust websites with our skilled developers.</p>
                </div> 

                <div className="category-card">
                <div className="img-wrapper">
                    <img src={istockphoto} alt="Website Development" className="category-img" />
                </div>
                <h2>Graphic Designer</h2>
                <p>Here’s a strong one-line content idea for a Graphic Designer profile or section.</p>
                </div>

                <div className="category-card">
                <div className="img-wrapper">
                    <img src={shop} alt="Shopify" className="category-img" />
                </div>
                <h2>Shopify Dropshipping</h2>
                <p>Start your dropshipping business with Shopify.</p>
                </div>

                <div className="category-card">
                <div className="img-wrapper">
                    <img src={DesignSiteImg} alt="Full Stack" className="category-img" />
                </div>
                <h2>Full Stack Developer</h2>
                <p>Get full-stack development services for your projects.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Popular;

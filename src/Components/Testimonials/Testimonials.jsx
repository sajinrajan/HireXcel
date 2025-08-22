import React from "react";
import "./Testimonials.css";
import hro from "../../assets/assets/hro.jpg";
import boss from "../../assets/assets/boss.jpg";
import hr from "../../assets/assets/hr.jpg";
import md from "../../assets/assets/md.jpg";
import co from "../../assets/assets/co.jpg";


const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonials-text">
        <h1>Testimonials</h1>
      </div>

      <div className="testimonials-image-section">
        <div className="testimonials-img-text">
          <div className="testimonials-img">
            <img src={hro} alt="Client" />
          </div>
          <p>
            "Great service! Highly recommended. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit."
          </p>
        </div>

        <div className="testimonials-img-text">
          <div className="testimonials-img">
            <img src={boss} alt="Client" />
          </div>
          <p>
            "Amazing experience! Will come back again. Vestibulum ante ipsum
            primis in faucibus."
          </p>
        </div>

        <div className="testimonials-img-text">
          <div className="testimonials-img">
            <img src={hr} alt="Client" />
          </div>
          <p>
            "Outstanding quality and fast delivery. Curabitur blandit tempus
            porttitor."
          </p>
        </div>

        <div className="testimonials-img-text">
          <div className="testimonials-img">
            <img src={md} alt="Client" />
          </div>
          <p>
            "Very professional team. Highly satisfied with the results!"
          </p>
        </div>

        <div className="testimonials-img-text">
          <div className="testimonials-img">
            <img src={co} alt="Client" />
          </div>
          <p>
            "Quick turnaround and excellent support. Will use again."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

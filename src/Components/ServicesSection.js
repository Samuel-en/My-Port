import React from "react";


function ServicesSection({ image,title }) {
  return (
    <div className="ServicesSection">
      <div className="service">
        <div className="service-content">
        <img src={image} alt="" />
        <h5 className="s-title">{title}</h5>
        <p className="s-text">
          Non laborum ut deserunt ad culpa proident est. 
        </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

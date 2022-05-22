import React from "react";
import milk from "../images/desktop/image-gallery-milkbottles.jpg";
import cone from "../images/desktop/image-gallery-cone.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";
const Lastgallery = () => {
  return (
    <div className="gallary">
      <img src={milk} alt="milk" className="gallary__images" />
      <img src={orange} alt="orange" className="gallary__images" />
      <img src={cone} alt="cone" className="gallary__images" />
      <img src={sugarcubes} alt="sugarcubes" className="gallary__images" />
    </div>
  );
};

export default Lastgallery;

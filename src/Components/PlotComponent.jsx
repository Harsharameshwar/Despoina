import React, { useEffect, useState } from "react";
import axios from "axios";

const PlotComponent = () => {
  // const [imageSrc, setImageSrc] = useState('');
  const [image1Src, setImage1Src] = useState("");
  const [image2Src, setImage2Src] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:5001/api/plot");
        const { image1, image2 } = data;
        setImage1Src("data:image/png;base64," + image1);
        setImage2Src("data:image/png;base64," + image2);
      } catch (error) {
        console.log("Error fetching image:", error);
      }
    };

    fetchImage();
  });

  return (
    <div>
      {/* Display the first image */}
      <img src={image1Src} alt="Img1" />

      {/* Display the second image */}
      <img src={image2Src} alt="Img2" />
    </div>
  );
};

export default PlotComponent;

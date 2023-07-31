import React from "react";
import Carousel from "react-elastic-carousel";
import "./Styleslider/slider.css";

export default function Slider() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },


  ];

  const photos = [
    {id:1, src: "images/uncharted.png" },
    {id:2, src: "images/blackadam.png" },
    {id:3, src: "images/extraction.png" },
    {id:4, src: "images/jumanji.png" },
    {id:5, src: "images/pogani.png" },
    {id:6, src: "images/morbius.png" },
    {id:7, src: "images/uncharted.png" },
    {id:8, src: "images/blackadam.png" },
    {id:9, src: "images/extraction.png" },
    {id:10, src: "images/jumanji.png" },
    {id:11, src: "images/pogani.png" },
    {id:12, src: "images/power.png" },
  ];

  return (
    <div >
      <Carousel className="carouselContainer" breakPoints={breakPoints}>
        {photos.map((photos, index) => (
          <img
            id="carouselImage"
            key={index}
            alt=""
            src={require("../../../../" + photos.src)}
          />
        ))}
      </Carousel>
    </div>
  );
}

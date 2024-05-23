"use client";
import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

const Carousel: React.FC = () => {
  return (
    <div style={{ width: "100%" }}>
      <ReactCarousel
        autoPlay
        interval={2000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
      >
        <div>
          <img
            src="/skoolamCarousel1.png"
            alt="Hero image 1"
            width={600}
            height={600}
          />
        </div>
        <div>
          <img
            src="/skoolamCarousel2.png"
            alt="Hero image 2"
            width={600}
            height={600}
          />
        </div>
        <div>
          <img
            src="/skoolamCarousel3.png"
            alt="Hero image 3"
            width={600}
            height={600}
          />
        </div>
      </ReactCarousel>
    </div>
  );
};

export default Carousel;

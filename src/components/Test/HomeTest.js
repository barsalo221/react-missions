import React from "react";
import "../Test/HomeTest.css";
import image1 from "../images/deni-3points.gif";
import image2 from "../images/curry-assist.gif";
import image3 from "../images/rebound.gif";

import Card from "./Card";

const HomeTest = () => {
  const cardData = [
    {
      frontImage: image1,
      frontText: "Prediction Points",
      backText: "Click and know the future points of NBA players.",
      url: "/home",
    },
    {
      frontImage: image2,
      frontText: "Prediction Assists",
      backText: "Click and know the future assists of NBA players.",
      url: "/home",
    },
    {
      frontImage: image3,
      frontText: "Prediction Rebounds",
      backText: "Click and know the future rebounds of NBA players.",
      url: "/home",
    },
  ];

  return (
    <div>
      <div className="text-black">
        <h1 className="text-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-emerald-400 md:text-5xl lg:text-6xl p-16">
          <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-400 from-cyan-400">
            Pred - Sport{" "}
          </span>
          <span className="text-transparent font-sans bg-clip-text bg-gradient-to-r to-red-400 from-cyan-400">
            Predict Stats
          </span>
        </h1>
        <div className="wrapper">
          <div className="cols">
            {cardData.map((card, index) => (
              <Card
                key={index}
                frontImage={card.frontImage}
                frontText={card.frontText}
                backText={card.backText}
                url={card.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTest;

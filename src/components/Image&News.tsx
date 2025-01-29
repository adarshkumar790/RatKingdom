"use client";
// components/NewsLayout.tsx

import React, { useState } from 'react';

const News: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<"Spot" | "Feature" | "Margin" | "Options">("Spot");

  const newsData = {
    Spot: {
      image: "/spot.png",
      headline: "News",
      content:
        "October 2024 saw an 87.2% surge in cryptocurrency spot trading volumes, fueled by optimism around Bitcoin ETFs. The SEC approved options for several Bitcoin ETFs, enabling institutional investors to hedge exposure. Additionally, Cboe plans to launch cash-settled Bitcoin options by December 2024.",
    },
    Feature: {
      image: "/spot.png",
      headline: "Feature News",
      content:
        "The cryptocurrency derivatives market has seen a significant uptick, with new feature products offering innovative ways for investors to engage. Platforms are introducing advanced trading tools to cater to institutional and retail traders alike.",
    },
    Margin: {
      image: "/spot.png",
      headline: "Margin News",
      content:
        "Margin trading volumes are climbing as traders leverage positions to maximize returns. Exchanges are offering competitive rates to attract high-volume traders, fueling market activity in Q4 2024.",
    },
    Options: {
      image: "/spot.png",
      headline: "Options News",
      content:
        "Options trading volumes are reaching new highs as investors explore hedging strategies and speculative opportunities. The rapid adoption of these instruments is reshaping market dynamics in 2024.",
    },
  };

  const handleTabClick = (tab: "Spot" | "Feature" | "Margin" | "Options") => {
    setSelectedTab(tab);
  };

  const { image, headline, content } = newsData[selectedTab];

  return (
    <div className="flex flex-col max-w-5xl mx-auto space-y-6">
      {/* Image + News Section */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
        {/* Image Container */}
        <div className="w-[90%] ml-4 md:w-[50%] bg-gray-200">
          <img
            src={image}
            alt={`${selectedTab} Image`}
            className="object-cover w-full h-64 md:h-full"
          />
        </div>

        {/* News Content */}
        <div className="w-[95%] md:w-[50%] ml-4 space-y-4 bg-[#D9D9D91F] p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-700">{headline}</h2>
          <p className="text-gray-900 text-base font-normal leading-6">{content}</p>
          <a href="#" className="text-blue-600 hover:underline font-medium">
            Read more...
          </a>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex flex-wrap justify-center md:justify-start space-x-0 md:space-x-4">
        {Object.keys(newsData).map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab as "Spot" | "Feature" | "Margin" | "Options")}
            className={`md:px-6 px-4 py-2 font-semibold rounded-lg transition-all duration-200 ${
              selectedTab === tab
                ? "text-gray-600 shadow"
                : "text-black hover:bg-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default News;

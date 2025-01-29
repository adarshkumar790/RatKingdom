"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TopData = () => {
  const topListData = [
    { shortName: "BTC", fullName: "Bitcoin", price: "$102,146.50", change: "-0.25%", changeColor: "text-red-500", icon: "/top1.png" },
    { shortName: "ETH", fullName: "Ethereum", price: "$102,156.10", change: "+0.15%", changeColor: "text-green-500", icon: "/top2.png" },
    { shortName: "BNB", fullName: "BNB", price: "$13,165.50", change: "-0.15%", changeColor: "text-red-500", icon: "/top3.png" },
    { shortName: "Rats", fullName: "Kingdom", price: "$316.50", change: "+0.35%", changeColor: "text-green-500", icon: "/top4.png" },
    { shortName: "SOL", fullName: "Solana", price: "$13,165.50", change: "-0.15%", changeColor: "text-red-500", icon: "/top5.png" },
  ];

  const newCoinsData = [
    { shortName: "DOGE", fullName: "Dogecoin", price: "$0.25", change: "+5.25%", changeColor: "text-green-500", icon: "/doge-icon.svg" },
    { shortName: "ADA", fullName: "Cardano", price: "$2.15", change: "-1.10%", changeColor: "text-red-500", icon: "/ada-icon.svg" },
    { shortName: "LTC", fullName: "Litecoin", price: "$175.75", change: "-0.75%", changeColor: "text-red-500", icon: "/ltc-icon.svg" },
    { shortName: "XRP", fullName: "Ripple", price: "$1.30", change: "+0.50%", changeColor: "text-green-500", icon: "/xrp-icon.svg" },
    { shortName: "DOT", fullName: "Polkadot", price: "$30.40", change: "+2.00%", changeColor: "text-green-500", icon: "/dot-icon.svg" },
  ];

  const [selectedTab, setSelectedTab] = useState("topList");

  useEffect(() => {
    console.log("Selected Tab:", selectedTab);
  }, [selectedTab]);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const data = selectedTab === "topList" ? topListData : newCoinsData;

  return (
    <div className="border border-gray-300 rounded-lg ml-3 mr-36 p-6 bg-[#E9E9E9] h-[350px] md:w-[600px] w-[360px]">
      {/* Tab Buttons with Bigger Background */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => handleTabClick("topList")}
          className={`md:px-24 px-16 -ml-7  -mt-7 py-4 font-semibold  ${
            selectedTab === "topList"
              ? "bg-white text-[#000000] "
              : "text-gray-800 bg-transparent"
          }`}
        >
          Top List
        </button>
        <button
          onClick={() => handleTabClick("newCoins")}
          className={`md:px-24 px-16 -mr-7 -mt-7 py-4 font-semibold transition-all ${
            selectedTab === "newCoins"
              ? "bg-white text-[#000000]"
              : "text-gray-800 bg-transparent"
          }`}
        >
          New Coins
        </button>
      </div>

      {/* Data List */}
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-4">
            <span className="flex items-center space-x-3 -ml-2">
              <Image src={item.icon} alt={item.shortName} width={30} height={30} />
              <div className="space-x-2">
                <span className="text-m font-bold text-[#5B5858]">{item.shortName}</span>
                <span className="ml-2 text-sm font-medium text-[#5B5858]">{item.fullName}</span>
              </div>
            </span>

            {/* Price & Change Section */}
            <div className="flex items-center md:space-x-16 space-x-2 ml-auto">
              <span className="font-semibold text-[#5B5858] text-[16px] leading-[21.78px] text-right">{item.price}</span>
              <span className={item.changeColor}>{item.change}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopData;

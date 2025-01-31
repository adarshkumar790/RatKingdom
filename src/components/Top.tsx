'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CryptoData {
  shortName: string;
  fullName: string;
  price: string; 
  change: number; 
  changeColor: string;
  icon: string; 
}

const TopData = () => {
  const [topListData, setTopListData] = useState<CryptoData[]>([]);
  const [newCoinsData, setNewCoinsData] = useState<CryptoData[]>([]);
  const [selectedTab, setSelectedTab] = useState("topList");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/crypto') 
      .then((res) => res.json())
      .then((data) => {
        
        setTopListData(
          data.top5Highest.map((crypto: any) => {
            const price = crypto.price || 0; 
            const changePercentage = crypto.change || 0; 
            return {
              shortName: crypto.symbol,
              fullName: crypto.name,
              price: price.toFixed(2), 
              change: changePercentage,
              changeColor: changePercentage < 0 ? "text-red-500" : "text-green-500",
              icon: getIconBySymbol(crypto.symbol),
            };
          })
        );

        
        setNewCoinsData(
          data.top5Newest.map((crypto: any) => {
            const price = crypto.price || 0;
            const changePercentage = crypto.change || 0;

            return {
              shortName: crypto.symbol,
              fullName: crypto.name,
              price: price.toFixed(2),
              change: changePercentage,
              changeColor: changePercentage < 0 ? "text-red-500" : "text-green-500",
              icon: getIconBySymbol(crypto.symbol),
            };
          })
        );
      })
      .catch(() => setError('Failed to fetch cryptocurrency data.'));
  }, []);

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const data = selectedTab === "topList" ? topListData : newCoinsData;

  
  const getIconBySymbol = (symbol: string) => {
    
    const iconMap: { [key: string]: string } = {
      BTC: "/top1.png",
      ETH: "/top2.png",
      BNB: "/top3.png",
      RATS: "/top4.png",
      MKR: "/maker.png",
      TRUMP: "/trump.png",
      S: "/s.png",
      PENGU: "/pengu.png",
      KAIA: "/kaia.png",
      FARTCOIN: "/fartcoin.png"
      
    };

    return iconMap[symbol] || "/icons.png"; 
  };

  return (
    <div className="border border-gray-300 rounded-lg md:ml-3 md:mr-36 mt-8 md:p-6 p-6 bg-[#E9E9E9] md:h-[350px] md:w-[600px] w-[300px]">
      
      <div className="flex justify-between mb-4">
        <button
          onClick={() => handleTabClick("topList")}
          className={`md:px-24 px-16 -ml-7 -mt-7 py-4 font-semibold ${
            selectedTab === "topList" ? "bg-white text-[#000000]" : "text-gray-800 bg-transparent"
          }`}
        >
          Top List
        </button>
        <button
          onClick={() => handleTabClick("newCoins")}
          className={`md:px-24 px-16 -mr-7 -mt-7 py-4 font-semibold transition-all ${
            selectedTab === "newCoins" ? "bg-white text-[#000000]" : "text-gray-800 bg-transparent"
          }`}
        >
          New Coins
        </button>
      </div>

      
      <ul>
        {data.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-4">
            <span className="flex items-center space-x-3 -ml-2">
              <Image
                src={item.icon} 
                alt={item.shortName}
                width={30}
                height={30}
              />
              <div className="md:space-x-2 space-x-1">
                <span className="text-m font-bold text-[#5B5858]">{item.shortName}</span>
                <span className="ml-2 text-sm font-medium text-[#5B5858]">{item.fullName}</span>
              </div>
            </span>

            
            <div className="flex items-center md:space-x-12 space-x-2 ml-auto">
              <span className="font-semibold text-[#5B5858] text-[12px] leading-[16.78px] text-right">${item.price}</span>
              <span className={`${item.changeColor} font-semibold`}>
                {item.change > 0 ? `+${item.change.toFixed(2)}%` : `${item.change.toFixed(2)}%`}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default TopData;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { IoIosMore } from "react-icons/io";

const OsDownloadOption = ({ Icon, label }: { Icon: React.ComponentType<any>; label: string }) => (
  <div className="flex flex-col items-center">
    <Icon size={24} />
    <p className="text-sm">{label}</p>
  </div>
);

const DownloadApp: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Desktop");

  const tabOptions = ["Desktop", "Mobile", "Pro"];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Left: Trading Chart */}
        <div className="flex justify-center">
          <Image
            src="/dt.png" // Replace with actual chart image
            alt="Trading Chart"
            width={700}
            height={500}
            className="object-cover"
          />
        </div>

        {/* Right: QR Code and Download Section */}
        <div className="flex flex-col justify-center text-center md:text-left space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Seamless trading,</h2>
            <h3 className="font-inter text-gray-600 text-[24px] font-semibold leading-[20.04px] text-left">
              Anywhere, anytime.
            </h3>
          </div>

          {/* QR Code */}
          <div className="flex items-center justify-center md:justify-start space-x-8">
            <Image
              src="/scan.png" // Replace with actual QR code image
              alt="QR Code"
              width={120}
              height={120}
              className="rounded-md"
            />
            <div className="flex flex-col ml-2">
              <p className="text-gray-700 text-m">Scan to Download App</p>
              <p className="font-bold text-xl text-gray-900">iOS and Android</p>
            </div>
          </div>

          {/* OS Download Options */}
          <div className="flex items-center justify-center md:justify-start space-x-16 text-black font-semibold">
            <OsDownloadOption Icon={FaApple} label="MacOS" />
            <OsDownloadOption Icon={FaWindows} label="Windows" />
            <OsDownloadOption Icon={FaLinux} label="Linux" />
            <OsDownloadOption Icon={IoIosMore} label="More" />
          </div>
        </div>
      </div>

      {/* Tabs: Desktop, Mobile, Pro */}
      <div className="mt-8 flex space-x-4 mr-96">
        {tabOptions.map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`px-4 py-2 font-semibold ${
              selectedTab === tab ? "text-gray-600 border-b-2 border-gray-400" : "text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DownloadApp;

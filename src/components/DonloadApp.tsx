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
    <div className="flex flex-col items-center justify-center min-h-screen px-4 mt-8 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl md:flex-row-reverse">
        {/* Right: QR Code and Download Section (Appears First in Mobile) */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 md:space-y-12">
          <div className="hidden">
            <h2 className="text-2xl  font-bold text-gray-900">Seamless trading,</h2>
            <h3 className="font-inter text-gray-600 text-[24px] font-semibold leading-[20.04px]">
              Anywhere, anytime.
            </h3>
          </div>

          {/* QR Code */}
          <div className="hidden flex flex-col md:flex-row items-center justify-center md:justify-start space-x-0 md:space-x-8">
            <Image
              src="/scan.png"
              alt="QR Code"
              width={120}
              height={120}
              className="rounded-md"
            />
            <div className="hidden flex flex-col mt-4 md:mt-0 ml-0 md:ml-2 text-center md:text-left">
              <p className="text-gray-700 text-m">Scan to Download App</p>
              <p className="font-bold text-xl text-gray-900">iOS and Android</p>
            </div>
          </div>

          {/* OS Download Options */}
          <div className="hidden flex justify-center md:justify-start space-x-12 text-black font-semibold">
            <OsDownloadOption Icon={FaApple} label="MacOS" />
            <OsDownloadOption Icon={FaWindows} label="Windows" />
            <OsDownloadOption Icon={FaLinux} label="Linux" />
            <OsDownloadOption Icon={IoIosMore} label="More" />
          </div>
        </div>

        {/* Left: Trading Chart (Appears Below in Mobile) */}
        <div className="flex justify-center order-first md:order-none">
          <Image
            src="/dt.png"
            alt="Trading Chart"
            width={700}
            height={500}
            className="object-cover w-full md:w-auto"
          />
        </div>
      </div>

      {/* Tabs: Desktop, Mobile, Pro */}
      <div className="md:mt-8  flex justify-center md:justify-start space-x-4">
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

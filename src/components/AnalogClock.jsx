import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [clock, setClock] = useState({
    hour: 0,
    min: 0,
    sec: 0,
    handHour: 0,
    handMin: 0,
    handSec: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setClock({
        hour: hours < 10 ? `0${hours}` : hours,
        min: minutes < 10 ? `0${minutes}` : minutes,
        sec: seconds < 10 ? `0${seconds}` : seconds,
        handHour: hours * 30 + minutes / 2,
        handMin: minutes * 6,
        handSec: seconds * 6,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative w-72 h-72 md:w-130 md:h-130 border-[12px] border-gray-800 rounded-full bg-gray-100 shadow-lg flex justify-center items-center">
        
        {/* Center Dot */}
        <div className="absolute w-5 h-5 bg-orange-700 rounded-full z-50"></div>

        {/* Digital Clock Display */}
        {/* <div className="absolute bottom-[20%] px-4 py-2 border-2 border-gray-600 rounded-md bg-white flex items-center">
          <span className="text-lg font-bold">{`${clock.hour}:${clock.min}`}</span>
          <span className="ml-1 text-xs">{clock.hour >= 12 ? "PM" : "AM"}</span>
        </div> */}
              
        <div className="mt-48">
            <img src="/quran.png" alt="" className="w-30 h-30" />
        </div>

        {/* Clock Hands */}
        <div className="absolute w-2/3 h-2 flex justify-center items-end" style={{ transform: `rotate(${clock.handHour}deg)` }}>
          <div className="w-4 bg-gray-800 h-34 rounded"></div>
        </div>
        <div className="absolute w-3/4 h-2 flex justify-center items-end" style={{ transform: `rotate(${clock.handMin}deg)` }}>
          <div className="w-1.5 bg-gray-800 h-58 rounded"></div>
        </div>
        <div className="absolute w-full h-2 flex justify-center items-end" style={{ transform: `rotate(${clock.handSec}deg)` }}>
          <div className="w-0.5 bg-red-500 h-50 rounded"></div>
        </div>

        {/* Small Tick Marks (Seconds) */}
        {[...Array(60)].map((_, index) => (
          <div key={index} className="absolute inset-2 flex justify-center" style={{ transform: `rotate(${6 * index}deg)` }}>
            <span className="block bg-gray-700 w-[2px] h-2"></span>
          </div>
        ))}

        {/* Large Tick Marks (Hours) */}
        {[...Array(12)].map((_, index) => (
          <div key={index} className="absolute inset-2 flex justify-center" style={{ transform: `rotate(${30 * index}deg)` }}>
            <span className="block bg-gray-900 w-[3px] h-5"></span>
          </div>
        ))}

        {/* Numbers */}
        {numbers.map((number) => (
          <div
            key={number}
            className="absolute flex justify-center items-center"
            style={{
              transform: `rotate(${30 * number}deg) translateY(-500%)`, // Move numbers farther outward
            }}
          >
            <span
              className="text-4xl font-semibold"
              style={{
                transform: `rotate(${-30 * number}deg)`, // Rotate numbers upright
              }}
            >
              {number}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalogClock;

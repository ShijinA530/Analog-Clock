import React, { useState, useEffect } from "react";
import AnalogClock from "../components/AnalogClock";

const prayerTimings = [
  { name: "FAJR", time: "05:37" },
  { name: "SUNRISE", time: "07:57" },
  { name: "DHUHR", time: "12:31" },
  { name: "ASR", time: "14:32" },
  { name: "MAGHRIB", time: "17:07" },
  { name: "ISHA", time: "19:19" },
];

const Screen = () => {
  const targetTime = new Date();
  targetTime.setHours(12, 31, 0, 0); // DHUHR time

//   const [countdown, setCountdown] = useState(getTimeLeft());

//     function getTimeLeft() {
//         const now = new Date();
//         const diff = targetTime - now;

//         const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
//         const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
//         const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

//         return { hours, minutes, seconds };
//     }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCountdown(getTimeLeft());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
    
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "f") {
        goFullScreen();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);
  
  const goFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100 m-4">
        <button
            onClick={goFullScreen}
            className="mb-4 px-4 py-2 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800"
        >
            Go Fullscreen
        </button>

        {/* Main Content */}
        <div className=" shadow-lg p-8 rounded-lg  bg-black w-full h-fit">
            <div className="bg-white flex p-6 h-full">
                {/* Left Side */}
                <div className="w-1/2 flex flex-col items-center space-y-3">
                    <h2 className="text-3xl font-semibold text-green-800">
                        Friday 14 February 2025 - 15 Shaban 1446
                    </h2>
                    <AnalogClock />
                    <p className="mt-2 text-3xl text-orange-600">
                        Powered by <span className="text-green-800 font-medium">SALATTIMES</span><span className="font-medium">.COM</span>
                    </p>
                  </div>
                  
                <div className="w-0.5  mx-4 bg-gradient-to-b from-transparent via-orange-600 to-transparent"></div>

                {/* Right Side - Prayer Timings */}
                <div className="w-1/2 mx-4 mt-4">
                    <div className="flex justify-center my-2">
                        <h3 className="text-5xl font-medium text-green-800">
                        DHUHR AFTER : <br />
                        <span className="text-orange-700 flex justify-center">
                            04:28:10
                        </span>
                        </h3>
                    </div>
                    <ul className="text-6xl font-semibold space-y-2">
                        {prayerTimings.map((prayer, index) => (
                            <li key={index} className={`${prayer.name === "DHUHR" ? "text-green-800" : "text-orange-600"} relative flex justify-between  pb-5`}>
                                <span>{prayer.name}</span>
                                <span>{prayer.time}</span>
                                <div className="absolute mx-auto inset-x-0 bottom-0 w-[90%] h-[1px] bg-gradient-to-r from-transparent via-green-800 to-transparent"></div>
                            </li>    
                        ))}
                    </ul>
                </div>

                </div>
        </div>
    </div>
  );
};

export default Screen;

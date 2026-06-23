"use client";

import { useState } from "react";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();

  const [booked, setBooked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen p-10 transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-sky-50 text-slate-900"
      }`}
    >
      {/* Dark Mode Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-24 right-8 z-50 bg-slate-800 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
      >
        {darkMode ? "☀ Light" : "🌙 Dark"}
      </button>

      <div
        className={`max-w-2xl mx-auto shadow-lg rounded-2xl p-8 ${
          darkMode
            ? "bg-slate-800 text-white"
            : "bg-white text-slate-900"
        }`}
      >
        <h1
          className={`text-3xl font-bold ${
            darkMode ? "text-sky-400" : "text-sky-800"
          }`}
        >
          🏡 Homestay Details
        </h1>

        <p
          className={`mt-2 ${
            darkMode ? "text-slate-300" : "text-slate-600"
          }`}
        >
          ID:{" "}
          <span
            className={
              darkMode ? "text-white" : "text-slate-800"
            }
          >
            {params.id}
          </span>
        </p>

        <h2 className="text-2xl font-semibold mt-4">
          Mountain View Stay
        </h2>

        <p
          className={`mt-2 ${
            darkMode ? "text-slate-300" : "text-slate-700"
          }`}
        >
          📍 Uttarakhand
        </p>

        <div
          className={`mt-6 space-y-3 ${
            darkMode ? "text-slate-200" : "text-slate-800"
          }`}
        >
          <p>⭐ Rating: 4.8</p>
          <p>💰 Price: ₹2000/night</p>
          <p>✔ Clean Rooms</p>
          <p>✔ Free WiFi</p>
          <p>✔ Mountain View</p>
          <p>✔ Verified Stay</p>
        </div>

        <button
          onClick={() => setBooked(true)}
          className="mt-6 w-full bg-sky-600 text-white py-3 rounded-xl hover:bg-sky-700 transition"
        >
          Book Now
        </button>

        {booked && (
          <div className="mt-4 bg-green-100 border border-green-300 text-green-700 p-4 rounded-xl text-center font-semibold">
            ✅ Booking Successful! Your homestay has been reserved.
          </div>
        )}
      </div>
    </div>
  );
}
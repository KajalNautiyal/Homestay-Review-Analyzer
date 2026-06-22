"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const homestays = [
    { id: 1, name: "Mountain View Stay", location: "Uttarakhand", rating: "4.8", price: "₹2000", icon: "🏔️" },
    { id: 2, name: "Lake Serenity", location: "Nainital", rating: "4.6", price: "₹1800", icon: "🌊" },
    { id: 3, name: "Hilltop Cottage", location: "Mussoorie", rating: "4.7", price: "₹2200", icon: "🏡" },
    { id: 4, name: "Forest Retreat", location: "Jim Corbett", rating: "4.9", price: "₹2500", icon: "🌲" },
    { id: 5, name: "Cloud Villa", location: "Shimla", rating: "4.5", price: "₹2100", icon: "☁️" },
    { id: 6, name: "River Side Stay", location: "Rishikesh", rating: "4.6", price: "₹1900", icon: "🏞️" },
  ];

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen p-10 transition-all duration-300 ${
          darkMode
            ? "bg-slate-900 text-white"
            : "bg-gradient-to-b from-sky-50 to-white"
        }`}
      >
        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-24 right-8 z-50 bg-slate-800 text-white px-5 py-3 rounded-full shadow-lg hover:scale-105 transition"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* Title */}
        <h1
          className={`text-4xl font-bold text-center mb-10 ${
            darkMode ? "text-sky-400" : "text-sky-800"
          }`}
        >
          🏡 Homestay List
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {homestays.map((home) => (
            <div
              key={home.id}
              className={`rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 ${
                darkMode
                  ? "bg-slate-800 text-white"
                  : "bg-white text-slate-900"
              }`}
            >
              <div className="text-5xl">{home.icon}</div>

              <h2 className="text-xl font-bold mt-3">
                {home.name}
              </h2>

              <p
                className={`mt-1 ${
                  darkMode ? "text-slate-300" : "text-slate-700"
                }`}
              >
                📍 {home.location}
              </p>

              <p className="text-yellow-500 font-semibold mt-2">
                ⭐ {home.rating}
              </p>

              <p className="text-green-500 font-semibold">
                {home.price}/night
              </p>

              <button
                onClick={() => router.push(`/detail/${home.id}`)}
                className="mt-4 w-full bg-sky-600 text-white py-2 rounded-xl hover:bg-sky-700 transition"
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
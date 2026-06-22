"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const homestays = [
    {
      name: "Mountain View Homestay",
      location: "Uttarakhand",
      rating: "4.8",
      icon: "🏔️",
    },
    {
      name: "Lake Side Stay",
      location: "Nainital",
      rating: "4.6",
      icon: "🌊",
    },
    {
      name: "Hilltop Cottage",
      location: "Mussoorie",
      rating: "4.7",
      icon: "🏡",
    },
  ];

  const [search, setSearch] = useState("");
  const [results, setResults] = useState(homestays);

  const handleSearch = (value) => {
    setSearch(value);

    const filtered = homestays.filter(
      (item) =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.location.toLowerCase().includes(value.toLowerCase())
    );

    setResults(filtered);
  };

  return (
    <>
      <Navbar />

      <div className={darkMode ? "bg-slate-900" : "bg-white"}>
        {/* Dark Mode Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-24 right-4 z-50 bg-slate-800 text-white px-4 py-2 rounded-full shadow-lg"
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>

        {/* HERO */}
        <section
          className={`py-20 ${
            darkMode
              ? "bg-slate-900"
              : "bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-5xl md:text-7xl mb-6">🏡</div>

            <h1
              className={`text-4xl md:text-6xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-slate-800"
              }`}
            >
              Homestay Review Analyzer
            </h1>

            <p
              className={`text-lg md:text-2xl mb-10 ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Discover the best homestays using AI-powered review analysis.
            </p>

            <button
              onClick={() => router.push("/analyze")}
              className="bg-sky-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-sky-700 transition"
            >
              📊 Analyze Reviews
            </button>
          </div>
        </section>

        {/* SEARCH */}
        <section
          className={`py-12 ${
            darkMode ? "bg-slate-800" : "bg-white"
          }`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <input
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="🔍 Search Homestays or Location..."
              className={`w-full border-2 rounded-xl px-5 py-4 shadow-md ${
                darkMode
                  ? "bg-slate-700 border-slate-600 text-white"
                  : "bg-white border-sky-300 text-black"
              }`}
            />
          </div>
        </section>

        {/* HOMESTAYS */}
        <section
          className={`py-16 px-6 ${
            darkMode ? "bg-slate-900" : "bg-slate-50"
          }`}
        >
          <h2
            className={`text-4xl font-bold text-center mb-12 ${
              darkMode ? "text-white" : "text-slate-800"
            }`}
          >
            Featured Homestays
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {results.length > 0 ? (
              results.map((home, index) => (
                <div
                  key={index}
                  className={`rounded-2xl shadow-lg p-8 text-center ${
                    darkMode
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-900"
                  }`}
                >
                  <div className="text-7xl mb-4">{home.icon}</div>

                  <h3 className="text-2xl font-bold">{home.name}</h3>

                  <p
                    className={`mt-2 ${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    📍 {home.location}
                  </p>

                  <p className="text-yellow-500 font-bold mt-3">
                    ⭐ {home.rating}
                  </p>

                  <button
                    onClick={() => router.push("/list")}
                    className="mt-4 bg-sky-600 text-white px-5 py-2 rounded-xl hover:bg-sky-700 transition"
                  >
                    View More
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center col-span-3 text-red-500 font-semibold">
                No Homestay Found
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
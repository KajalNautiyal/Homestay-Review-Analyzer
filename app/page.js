"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const router = useRouter();

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

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="text-7xl mb-6">🏡</div>

          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Homestay Review Analyzer
          </h1>

          <p className="text-2xl text-slate-600 mb-10">
            Discover the best homestays using AI-powered review analysis.
          </p>

          {/* CLICKABLE BUTTON */}
          <button
            onClick={() => router.push("/analyze")}
            className="bg-sky-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            📊 Analyze Reviews
          </button>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <input
            type="text"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="🔍 Search Homestays or Location..."
            className="w-full border-2 border-sky-300 rounded-xl px-5 py-4 text-black shadow-md"
          />
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-slate-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Featured Homestays
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {results.length > 0 ? (
            results.map((home, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 text-center"
              >
                <div className="text-7xl mb-4">{home.icon}</div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {home.name}
                </h3>

                <p className="text-slate-600 mt-2">
                  📍 {home.location}
                </p>

                <p className="text-yellow-500 font-bold mt-3">
                  ⭐ {home.rating}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3 text-red-500 font-semibold">
              No Homestay Found
            </p>
          )}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Why Choose Our Platform?
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-3">
              AI Analysis
            </h3>
            <p className="text-slate-600">
              Analyze reviews automatically using AI.
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-4">📊</div>
            <h3 className="text-2xl font-bold text-green-700 mb-3">
              Review Insights
            </h3>
            <p className="text-slate-600">
              Understand customer experiences instantly.
            </p>
          </div>

          <div className="bg-orange-50 p-8 rounded-2xl shadow-lg text-center">
            <div className="text-5xl mb-4">🏡</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-3">
              Smart Decisions
            </h3>
            <p className="text-slate-600">
              Choose the best homestay with confidence.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
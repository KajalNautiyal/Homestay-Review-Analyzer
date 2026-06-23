"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Dashboard() {
  const homestays = [
    { name: "Mountain View Stay", location: "Uttarakhand", rating: "4.8", price: "₹2000", icon: "🏔️" },
    { name: "Lake Serenity", location: "Nainital", rating: "4.6", price: "₹1800", icon: "🌊" },
    { name: "Hilltop Cottage", location: "Mussoorie", rating: "4.7", price: "₹2200", icon: "🏡" },
    { name: "Forest Retreat", location: "Jim Corbett", rating: "4.9", price: "₹2500", icon: "🌲" },
    { name: "Cloud View Villa", location: "Shimla", rating: "4.5", price: "₹2100", icon: "☁️" },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100 relative overflow-hidden">

        {/* BACKGROUND DECORATION */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-sky-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        </div>

        {/* HERO */}
        <section className="relative text-center py-20 px-6">
          <h1 className="text-5xl font-extrabold text-sky-700">
            Homestay Intelligence Hub
          </h1>

          <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
            Explore premium homestays with AI-powered review insights and smart recommendations.
          </p>

          {/* floating badge */}
          <div className="mt-6 inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full font-semibold shadow">
            ✨ Powered by AI Analysis Engine
          </div>
        </section>

        {/* STATS */}
        <section className="relative max-w-6xl mx-auto px-6 -mt-10">
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-6 text-center shadow-lg">
              <h2 className="text-4xl font-extrabold text-sky-600">150+</h2>
              <p className="text-slate-600 mt-1">Active Homestays</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-6 text-center shadow-lg">
              <h2 className="text-4xl font-extrabold text-blue-600">4.7★</h2>
              <p className="text-slate-600 mt-1">Avg User Rating</p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl border border-sky-100 rounded-2xl p-6 text-center shadow-lg">
              <h2 className="text-4xl font-extrabold text-sky-500">AI</h2>
              <p className="text-slate-600 mt-1">Smart Analyzer</p>
            </div>

          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-14 relative">
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-sky-100">

            <h2 className="text-3xl font-bold text-sky-700 mb-4">
              About the Platform
            </h2>

            <p className="text-slate-600 leading-8 text-lg">
              This platform uses AI to analyze homestay reviews, detect sentiment,
              and help travelers choose the best stays with confidence.
              It turns raw feedback into meaningful insights.
            </p>

          </div>
        </section>

        {/* LIST TITLE */}
        <section className="text-center mb-8 px-6">
          <h2 className="text-4xl font-bold text-sky-800">
            Explore Homestays
          </h2>
          <p className="text-slate-500 mt-2">
            Curated stays with top guest ratings
          </p>
        </section>

        {/* CARDS */}
        <section className="max-w-6xl mx-auto px-6 pb-20">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {homestays.map((home, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-lg border border-sky-100 rounded-3xl p-6 shadow-md hover:shadow-2xl transition duration-300 hover:-translate-y-2"
              >

                {/* ICON */}
                <div className="text-5xl mb-3 group-hover:scale-110 transition">
                  {home.icon}
                </div>

                {/* NAME */}
                <h3 className="text-xl font-bold text-slate-800">
                  {home.name}
                </h3>

                {/* LOCATION */}
                <p className="text-slate-500 mt-1">
                  📍 {home.location}
                </p>

                {/* RATING + PRICE */}
                <div className="flex justify-between mt-4 text-sm">
                  <span className="text-yellow-500 font-semibold">
                    ⭐ {home.rating}
                  </span>

                  <span className="text-green-600 font-semibold">
                    {home.price}/night
                  </span>
                </div>

                {/* BUTTON */}
                <button className="mt-5 w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-2 rounded-xl font-semibold hover:opacity-90 transition">
                  View Details
                </button>

              </div>
            ))}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
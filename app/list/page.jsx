"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

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

      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white p-10">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-sky-800 text-center mb-10">
          🏡 Homestay List
        </h1>

        {/* LIST GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {homestays.map((home) => (
            <div
              key={home.id}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition duration-300"
            >

              {/* ICON */}
              <div className="text-5xl">{home.icon}</div>

              {/* NAME */}
              <h2 className="text-xl font-bold text-slate-900 mt-3">
                {home.name}
              </h2>

              {/* LOCATION */}
              <p className="text-slate-700 mt-1">
                📍 {home.location}
              </p>

              {/* RATING */}
              <p className="text-yellow-600 font-semibold mt-2">
                ⭐ {home.rating}
              </p>

              {/* PRICE */}
              <p className="text-green-700 font-semibold">
                {home.price}/night
              </p>

              {/* VIEW DETAILS BUTTON (CLICKABLE) */}
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
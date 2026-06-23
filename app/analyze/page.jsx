"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { analyzeSentiment } from "../services/sentimentService";

export default function AnalyzePage() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleAnalyze = () => {
    if (review.trim() === "") {
      alert("Please enter a review");
      return;
    }

    const sentiment = analyzeSentiment(review);
    setResult(sentiment);
  };

  const getEmoji = () => {
    if (result === "Positive") return "😊";
    if (result === "Negative") return "😞";
    return "😐";
  };

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen px-6 py-12 flex items-center justify-center ${
          darkMode
            ? "bg-slate-900"
            : "bg-gradient-to-br from-sky-100 via-white to-cyan-100"
        }`}
      >
        <div
          className={`w-full max-w-4xl rounded-3xl shadow-2xl p-8 border ${
            darkMode
              ? "bg-slate-800 text-white border-slate-700"
              : "bg-white/80 text-slate-800 border-white/30"
          }`}
        >
          {/* Dark Mode Button */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1
              className={`text-5xl font-extrabold mb-3 ${
                darkMode ? "text-white" : "text-sky-700"
              }`}
            >
              AI Review Analyzer
            </h1>

            <p
              className={`text-lg ${
                darkMode ? "text-slate-300" : "text-slate-600"
              }`}
            >
              Analyze guest reviews instantly and discover customer sentiment.
            </p>
          </div>

          {/* Example Reviews */}
          <div className="flex flex-wrap gap-3 justify-center mb-6">
            <button
              onClick={() =>
                setReview(
                  "Amazing stay! The rooms were clean and the host was very friendly."
                )
              }
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200"
            >
              😊 Positive Example
            </button>

            <button
              onClick={() =>
                setReview(
                  "The room was dirty and the service was disappointing."
                )
              }
              className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200"
            >
              😞 Negative Example
            </button>

            <button
              onClick={() =>
                setReview(
                  "The stay was okay. Nothing special but acceptable."
                )
              }
              className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200"
            >
              😐 Neutral Example
            </button>
          </div>

          {/* Textarea */}
          <textarea
            rows="7"
            placeholder="Type or paste your guest review here..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className={`w-full border-2 rounded-2xl p-5 text-lg focus:outline-none ${
              darkMode
                ? "bg-slate-700 border-slate-600 text-white"
                : "bg-white border-sky-200 text-slate-800"
            }`}
          />

          <div
            className={`flex justify-between mt-2 text-sm ${
              darkMode ? "text-slate-400" : "text-slate-500"
            }`}
          >
            <span>Share your experience</span>
            <span>{review.length} characters</span>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            className="w-full mt-6 bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-bold py-4 rounded-2xl hover:scale-[1.02] transition"
          >
            🚀 Analyze Review
          </button>

          {/* Result */}
          {result && (
            <div
              className={`mt-8 rounded-3xl p-8 text-center border ${
                darkMode
                  ? "bg-slate-700 border-slate-600"
                  : "bg-gradient-to-r from-sky-50 to-cyan-50 border-sky-200"
              }`}
            >
              <div className="text-7xl mb-4">{getEmoji()}</div>

              <h2 className="text-3xl font-bold mb-3">
                Analysis Result
              </h2>

              <div className="inline-block px-8 py-3 bg-sky-600 text-white rounded-full text-2xl font-bold">
                {result}
              </div>

              <p
                className={`mt-4 ${
                  darkMode ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Based on the review content, the AI has detected a
                <span className="font-semibold"> {result} </span>
                sentiment.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
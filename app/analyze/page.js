"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { analyzeSentiment } from "../services/sentimentService";

export default function AnalyzePage() {
  const [review, setReview] = useState("");
  const [result, setResult] = useState("");

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

      <main className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100 px-6 py-12 flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl border border-white/30 p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-extrabold text-sky-700 mb-3">
              AI Review Analyzer
            </h1>

            <p className="text-slate-600 text-lg">
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
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition"
            >
              😊 Positive Example
            </button>

            <button
              onClick={() =>
                setReview(
                  "The room was dirty and the service was disappointing."
                )
              }
              className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium hover:bg-red-200 transition"
            >
              😞 Negative Example
            </button>

            <button
              onClick={() =>
                setReview(
                  "The stay was okay. Nothing special but acceptable."
                )
              }
              className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium hover:bg-yellow-200 transition"
            >
              😐 Neutral Example
            </button>
          </div>

          {/* Textarea */}
          <div>
            <textarea
              rows="7"
              placeholder="Type or paste your guest review here..."
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="w-full border-2 border-sky-200 rounded-2xl p-5 text-slate-800 text-lg focus:outline-none focus:ring-4 focus:ring-sky-300"
            />

            <div className="flex justify-between mt-2 text-sm text-slate-500">
              <span>Share your experience</span>
              <span>{review.length} characters</span>
            </div>
          </div>

          {/* Analyze Button */}
          <button
            onClick={handleAnalyze}
            className="w-full mt-6 bg-gradient-to-r from-sky-600 to-cyan-500 text-white font-bold py-4 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            🚀 Analyze Review
          </button>

          {/* Result */}
          {result && (
            <div className="mt-8 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200 rounded-3xl p-8 text-center shadow-lg">

              <div className="text-7xl mb-4">
                {getEmoji()}
              </div>

              <h2 className="text-3xl font-bold text-slate-800 mb-3">
                Analysis Result
              </h2>

              <div className="inline-block px-8 py-3 bg-sky-600 text-white rounded-full text-2xl font-bold shadow-md">
                {result}
              </div>

              <p className="mt-4 text-slate-600">
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
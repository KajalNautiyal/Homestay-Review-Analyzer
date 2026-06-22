"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const sentimentData = [
  { name: "Positive", value: 65 },
  { name: "Neutral", value: 20 },
  { name: "Negative", value: 15 },
];

const reviewData = [
  { month: "Jan", reviews: 45 },
  { month: "Feb", reviews: 60 },
  { month: "Mar", reviews: 80 },
  { month: "Apr", reviews: 55 },
  { month: "May", reviews: 95 },
];

const COLORS = ["lightgreen", "skyblue", "lightcoral"];

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-sky-50 p-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-sky-700">
            Review Analytics Dashboard
          </h1>

          <p className="text-slate-700 mt-4 text-lg">
            Analyze customer reviews and discover insights using AI.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-5 gap-6 mb-12">

          <div className="bg-sky-100 border border-sky-200 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-4xl font-bold text-sky-600">500+</h2>
            <p className="mt-2 text-slate-900 font-semibold">
              Total Reviews
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-4xl font-bold text-green-600">65%</h2>
            <p className="mt-2 text-slate-900 font-semibold">
              Positive Reviews
            </p>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-4xl font-bold text-red-500">15%</h2>
            <p className="mt-2 text-slate-900 font-semibold">
              Negative Reviews
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-4xl font-bold text-orange-500">150+</h2>
            <p className="mt-2 text-slate-900 font-semibold">
              Homestays Listed
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 shadow-md text-center">
            <h2 className="text-4xl font-bold text-purple-600">4.7★</h2>
            <p className="mt-2 text-slate-900 font-semibold">
              Average Rating
            </p>
          </div>

        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Sentiment Distribution
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {sentimentData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>

                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-4">
              Monthly Reviews
            </h2>

            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={reviewData}>
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis
                  dataKey="month"
                  tick={{ fill: "#0f2a14", fontSize: 14 }}
                />

                <YAxis
                  tick={{ fill: "#0f172a", fontSize: 14 }}
                />

                <Tooltip />

                <Bar
                  dataKey="reviews"
                  fill="skyblue"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        {/* AI Insights */}
        <div className="bg-white mt-10 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-5">
            AI Generated Insights
          </h2>

          <ul className="space-y-3 text-slate-800 font-medium">
            <li>✅ Most guests praised cleanliness and hospitality.</li>
            <li>✅ Positive sentiment accounts for 65% of all reviews.</li>
            <li>⚠ Negative reviews mainly mention Wi-Fi issues.</li>
            <li>📈 Review activity increased significantly in May.</li>
          </ul>
        </div>

        {/* Top Homestay */}
        <div className="bg-white mt-10 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Top Performing Homestay
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-xl font-bold text-green-700">
                Mountain View Homestay
              </h3>

              <p className="text-slate-700 mt-2">
                Highest customer satisfaction score this month.
              </p>
            </div>

            <div className="text-4xl font-bold text-yellow-500 mt-4 md:mt-0">
              ⭐ 4.9
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </>
  );
}
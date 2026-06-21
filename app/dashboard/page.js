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

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"];

export default function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen p-8">
        <h1 className="text-4xl font-bold text-center text-slate-900 mb-10">
          Review Analytics Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-blue-600">500+</h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Total Reviews
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-green-600">65%</h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Positive Reviews
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-red-500">15%</h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Negative Reviews
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <h2 className="text-4xl font-bold text-orange-500">150+</h2>
            <p className="mt-2 text-lg font-semibold text-slate-900">
              Homestays Listed
            </p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Sentiment Distribution
            </h2>

            <ResponsiveContainer width="100%" height={300}>
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Monthly Reviews
            </h2>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={reviewData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tick={{ fill: "#0f172a", fontSize: 14 }}
                />
                <YAxis
                  tick={{ fill: "#0f172a", fontSize: 14 }}
                />
                <Tooltip />
                <Bar dataKey="reviews" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights */}
        <div className="bg-white mt-10 rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            AI Generated Insights
          </h2>

          <ul className="list-disc pl-5 space-y-3 text-slate-800 font-medium">
            <li>Most guests praised cleanliness and hospitality.</li>
            <li>Positive sentiment accounts for 65% of all reviews.</li>
            <li>Negative reviews mainly mention Wi-Fi issues.</li>
            <li>Review activity increased significantly in May.</li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  const router = useRouter();

  const [darkMode, setDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!email.includes("@")) {
      setError("Enter valid email");
      return;
    }

    localStorage.setItem(
      "homestay_user",
      JSON.stringify({
        email,
        loggedIn: true,
      })
    );

    router.push("/");
  };

  return (
    <>
      <Navbar />

      <main
        className={`min-h-screen flex items-center justify-center px-6 py-12 transition-all duration-300 ${
          darkMode
            ? "bg-slate-900"
            : "bg-gradient-to-br from-blue-100 via-white to-indigo-100"
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
          className={`w-full max-w-md rounded-3xl shadow-2xl p-8 transition-all duration-300 ${
            darkMode ? "bg-slate-800" : "bg-white"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🏡</div>

            <h1
              className={`text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Welcome Back
            </h1>

            <p
              className={`mt-2 ${
                darkMode ? "text-slate-300" : "text-gray-600"
              }`}
            >
              Login to access your Homestay Review Dashboard
            </p>
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label
                className={`block font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  darkMode
                    ? "bg-slate-700 border-slate-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div>
              <label
                className={`block font-semibold mb-2 ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 ${
                  darkMode
                    ? "bg-slate-700 border-slate-600 text-white"
                    : "bg-white border-gray-300 text-gray-900"
                }`}
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label
                className={`flex items-center gap-2 ${
                  darkMode ? "text-slate-300" : "text-gray-700"
                }`}
              >
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-sky-500 font-medium hover:text-sky-400"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div
              className={`flex-grow border-t ${
                darkMode ? "border-slate-600" : "border-gray-300"
              }`}
            ></div>

            <span
              className={`px-3 text-sm ${
                darkMode ? "text-slate-400" : "text-gray-500"
              }`}
            >
              OR
            </span>

            <div
              className={`flex-grow border-t ${
                darkMode ? "border-slate-600" : "border-gray-300"
              }`}
            ></div>
          </div>

          {/* Google Button */}
          <button
            className={`w-full py-3 rounded-xl font-medium transition ${
              darkMode
                ? "border border-slate-600 bg-slate-700 text-white hover:bg-slate-600"
                : "border border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            Continue with Google
          </button>

          {/* Signup */}
          <div className="text-center mt-6">
            <p
              className={`${
                darkMode ? "text-slate-300" : "text-gray-600"
              }`}
            >
              Don't have an account?{" "}
              <span className="text-sky-500 font-bold cursor-pointer hover:text-sky-400">
                Sign Up
              </span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
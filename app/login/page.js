import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-indigo-100 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-7xl mb-4">🏡</div>

            <h1 className="text-3xl font-bold text-gray-900">
              Welcome Back
            </h1>

            <p className="text-gray-600 mt-2">
              Login to access your Homestay Review Dashboard
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" />
                Remember me
              </label>

              <a
                href="#"
                className="text-blue-600 font-medium hover:text-blue-800"
              >
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Google Button */}
          <button className="w-full border border-gray-300 py-3 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition">
            Continue with Google
          </button>

          {/* Signup */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <span className="text-blue-600 font-bold cursor-pointer hover:text-blue-800">
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
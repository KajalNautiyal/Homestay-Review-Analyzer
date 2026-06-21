import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
          
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏡</div>

            <h1 className="text-3xl font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="text-slate-600 mt-2">
              Login to access your Homestay Review Dashboard
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-800 font-medium mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-700">
                <input type="checkbox" />
                Remember me
              </label>

              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          <div className="text-center mt-6">
            <p className="text-slate-600">
              Don't have an account?{" "}
              <span className="text-blue-600 font-semibold cursor-pointer">
                Sign Up
              </span>
            </p>
          </div>

          <div className="mt-8 border-t pt-6">
            <button className="w-full border border-slate-300 py-3 rounded-xl font-medium text-slate-700 hover:bg-slate-100 transition">
              Continue with Google
            </button>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
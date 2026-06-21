import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-6">
            🏡 Homestay Review Analyzer
          </h1>

          <p className="text-xl mb-8">
            Discover the best homestays using AI-powered review analysis.
          </p>

          <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition">
            Analyze Reviews
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <input
            type="text"
            placeholder="🔍 Search Homestays..."
            className="w-full border-2 border-blue-300 rounded-xl px-5 py-4 text-black shadow-md"
          />
        </div>
      </section>

      {/* Featured Homestays */}
      <section className="bg-slate-50 py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
          Featured Homestays
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-48 bg-blue-200"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-800">
                Mountain View Homestay
              </h3>
              <p className="text-slate-600">📍 Uttarakhand</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ 4.8</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-48 bg-green-200"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-800">
                Lake Side Stay
              </h3>
              <p className="text-slate-600">📍 Nainital</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ 4.6</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-48 bg-orange-200"></div>
            <div className="p-5">
              <h3 className="text-xl font-bold text-slate-800">
                Hilltop Cottage
              </h3>
              <p className="text-slate-600">📍 Mussoorie</p>
              <p className="text-yellow-500 font-bold mt-2">⭐ 4.7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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
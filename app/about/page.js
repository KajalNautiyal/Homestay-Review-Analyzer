import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <main className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h1 className="text-5xl font-bold mb-4">
              About Homestay Review Analyzer
            </h1>

            <p className="text-xl">
              Transforming guest reviews into meaningful insights using AI.
            </p>
          </div>
        </section>

        {/* Project Description */}
        <section className="max-w-6xl mx-auto py-16 px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Our Mission
            </h2>

            <p className="text-slate-600 text-lg leading-8">
              Homestay Review Analyzer is an AI-powered platform designed to
              help travelers and homestay owners understand customer feedback
              more effectively. By analyzing reviews, the platform identifies
              sentiments, highlights key trends, and provides actionable
              insights for better decision-making.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto pb-16 px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🤖</div>

              <h3 className="text-xl font-bold text-blue-700 mb-3">
                Sentiment Analysis
              </h3>

              <p className="text-slate-600">
                Automatically classify reviews into positive, negative,
                and neutral categories.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">📊</div>

              <h3 className="text-xl font-bold text-green-700 mb-3">
                Review Insights
              </h3>

              <p className="text-slate-600">
                Discover customer preferences, trends, and common issues.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-2xl shadow-lg">
              <div className="text-5xl mb-4">🏡</div>

              <h3 className="text-xl font-bold text-orange-700 mb-3">
                Better Decisions
              </h3>

              <p className="text-slate-600">
                Make smarter booking and management decisions using data.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-8">
              Technology Stack
            </h2>

            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
                Next.js
              </span>

              <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full font-semibold">
                React
              </span>

              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
                Tailwind CSS
              </span>

              <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-semibold">
                AI / NLP
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

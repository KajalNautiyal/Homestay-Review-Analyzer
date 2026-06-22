export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-sky-200 via-cyan-100 to-blue-200 py-24">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="text-5xl font-extrabold text-slate-800 mb-6">
          Homestay Review Analyzer
        </h1>

        <p className="text-xl text-slate-700 mb-8">
          Analyze guest reviews and discover customer sentiment using AI-powered insights.
        </p>

        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition">
          Analyze Reviews
        </button>
      </div>
    </section>
  );
}
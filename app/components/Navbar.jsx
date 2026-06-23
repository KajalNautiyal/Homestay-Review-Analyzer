import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">

        <h1 className="text-xl md:text-2xl font-bold text-center">
          🏡 Homestay Review Analyzer
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-lg font-semibold">
          <Link href="/" className="hover:text-yellow-200">
            Home
          </Link>

          <Link href="/list" className="hover:text-yellow-200">
            List
          </Link>

          <Link href="/dashboard" className="hover:text-yellow-200">
            Dashboard
          </Link>

          <Link href="/analyze" className="hover:text-yellow-200">
            Analyze
          </Link>

          <Link href="/login" className="hover:text-yellow-200">
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}
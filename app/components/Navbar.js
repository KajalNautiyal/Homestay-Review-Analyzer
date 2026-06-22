import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg">
      <h1 className="text-3xl font-bold">
        🏡 Homestay Review Analyzer
      </h1>

      <div className="flex gap-8 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/analyze">Analyze</Link>
        <Link href="/login">Login</Link>
      </div>
    </nav>
  );
}
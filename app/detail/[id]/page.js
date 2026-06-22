export default function Page({ params, searchParams }) {
  return (
    <div className="min-h-screen bg-sky-50 p-10">

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {/* TITLE */}
        <h1 className="text-3xl font-bold text-sky-800">
          🏡 Homestay Details
        </h1>

        {/* ID */}
        <p className="mt-2 text-slate-600">
          ID: <span className="text-slate-800">{params.id}</span>
        </p>

        {/* NAME */}
        <h2 className="text-2xl font-semibold mt-4 text-slate-900">
          {searchParams?.name}
        </h2>

        {/* LOCATION */}
        <p className="mt-2 text-slate-700">
          📍 {searchParams?.location}
        </p>

        {/* POINTS */}
        <div className="mt-6 space-y-3 text-slate-800">

          <p>⭐ Rating: {searchParams?.rating}</p>
          <p>💰 Price: {searchParams?.price}/night</p>

          <p>✔ Clean Rooms</p>
          <p>✔ Free WiFi</p>
          <p>✔ Mountain/Lake View</p>
          <p>✔ Verified Stay</p>

        </div>

        {/* BUTTON */}
        <button className="mt-6 w-full bg-sky-600 text-white py-3 rounded-xl hover:bg-sky-700">
          Book Now
        </button>

      </div>
    </div>
  );
}
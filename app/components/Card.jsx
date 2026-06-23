export default function Card({ title, location, rating }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-gray-700">{location}</p>

      <p className="text-yellow-500 font-bold">
        ⭐ {rating}
      </p>
    </div>
  );
}
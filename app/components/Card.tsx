type CardProps = {
  title: string;
  location: string;
  rating: string;
};

export default function Card({
  title,
  location,
  rating,
}: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold">
        {title}
      </h2>

      <p>{location}</p>

      <p>⭐ {rating}</p>
    </div>
  );
}
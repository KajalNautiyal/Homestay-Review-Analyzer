/**
 * Toast Component
 * Props:
 * message - toast message
 */

export default function Toast({ message }) {
  return (
    <div className="bg-green-500 text-white px-4 py-2 rounded-lg">
      {message}
    </div>
  );
}
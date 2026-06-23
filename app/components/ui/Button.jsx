/**
 * Button Component
 * Props:
 * text - button label
 * onClick - click handler
 */

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded-lg"
    >
      {text}
    </button>
  );
}
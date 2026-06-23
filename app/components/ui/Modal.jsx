/**
 * Modal Component
 * Props:
 * title - modal title
 */

export default function Modal({ title }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
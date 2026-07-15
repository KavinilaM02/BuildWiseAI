import { X } from "lucide-react";

const DemoModal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">

      <div className="relative w-full max-w-5xl rounded-2xl bg-[#111827] p-6">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-white"
        >
          <X size={28} />
        </button>

        <h2 className="mb-6 text-3xl font-bold text-white">
          BuildWise AI Demo
        </h2>

        <div className="aspect-video overflow-hidden rounded-xl">

          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="BuildWise AI Demo"
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </div>
  );
};

export default DemoModal;
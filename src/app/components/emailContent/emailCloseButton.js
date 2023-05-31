import { FiX } from "react-icons/fi";

export default function EmailCloseButton({ onClick }) {
  return (
    <button
      className="absolute top-3 py-1 px-3 right-2 pb-1 rounded bg-indigo-300 hover:bg-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700"
      onClick={onClick}
    >
      <FiX className="inline sm:mr-1 mb-[1px]" />

      <span className="hidden sm:inline">Fechar</span>
    </button>
  );
}

import { FiX } from "react-icons/fi";

export default function EmailCloseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <FiX className="inline sm:mr-1 mb-1" />

      <span className="hidden sm:inline">Fechar</span>
    </button>
  );
}

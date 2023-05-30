export default function WriteButton({ children }) {
  return (
    <button
      className="
        bg-primary-400 hover:bg-primary-500 dark:bg-primary-500 dark:hover:bg-primary-600
        py-2 w-full rounded-lg transition-colors
  
  "
    >
      {children}
    </button>
  );
}

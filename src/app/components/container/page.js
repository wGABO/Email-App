export default function Container({ children }) {
  return (
    <div
      className="
        bg-gray-100 dark:bg-gray-700 dark:text-gray-50 text-gray-900
        px-2 pb-2 xl:px-6 xl:pb-4 h-[calc(100vh_-_4rem)] xl:h-[calc(100vh_-_4rem)]
        "
    >
      {children}
    </div>
  );
}

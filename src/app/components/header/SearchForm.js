"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchForm() {
  return (
    <form
      className="min-w-0 flex-grow flex "
      onSubmit={(ev) => ev.preventDefault()}
    >
      <input
        className="min-w-0 w-full p-2 rounded-l-lg border-2 border-transparent bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-50 
        focus:outline-none focus:border-primary-400"
        type="text"
        placeholder="Pesquisar"
      />
      <button
        className="
      min-w-0 py-2 px-4 
       bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-50 rounded-r-lg border-2 border-transparent focus:outline-none hover:bg-primary-500 hover:dark:bg-primary-500 hover:text-gray-50 transition-all
      "
      >
        <FiSearch />
      </button>
    </form>
  );
}

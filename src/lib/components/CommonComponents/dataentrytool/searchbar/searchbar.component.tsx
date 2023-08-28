import React from "react";

interface PROPS {
  label: string;
  placeholder: string;
  submit_button_name: string;
  value: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<PROPS> = ({
  label,
  placeholder,
  submit_button_name,
  value,
  changeHandler,
}) => {
  return (
    <form className="w-full">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          autoFocus
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border-2 border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
          required
        />
        <button
          type="submit"
          disabled={value.length === 0}
          className={
            value.length > 0
              ? "text-white cursor-pointer border-none absolute right-1.5 bottom-1.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-md text-sm px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              : "text-white border-none cursor-not-allowed absolute right-1.5 bottom-1.5 bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-bold rounded-md text-sm px-6 py-3 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          }
        >
          {submit_button_name}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

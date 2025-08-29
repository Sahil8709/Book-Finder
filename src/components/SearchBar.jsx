// Import React's useState hook to manage local state
import { useState } from "react";

// SearchBar component allows users to input a book title and trigger a search
const SearchBar = ({ onSearch }) => {
  // Local state to track the user's input query
  const [query, setQuery] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default page reload
    if (query.trim()) onSearch(query); // Trigger search only if input is not empty
  };

  return (
    // Form container with horizontal layout and spacing
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      
      {/* Input field for book title */}
      <input
        type="text"
        placeholder="Search books by title..." // User-friendly placeholder
        value={query} // Controlled input bound to local state
        onChange={(e) => setQuery(e.target.value)} // Update state on input change
        className="px-4 py-2 rounded-md w-full border border-gray-300 focus:outline-none"
      />

      {/* Submit button to trigger search */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
};

// Export the SearchBar component for use in App.jsx
export default SearchBar;
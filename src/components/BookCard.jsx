// BookCard component displays individual book details in a styled card format
const BookCard = ({ title, author, year, coverId }) => {
  // Construct the cover image URL using Open Library's cover API
  // If coverId is missing, use a placeholder image instead
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";

  return (
    // Card container with styling: white background, shadow, rounded corners, and hover scale effect
    <div className="bg-white shadow-md rounded-md p-4 w-60 text-center hover:scale-105 transition duration-300">
      
      {/* Book cover image */}
      <img
        src={coverUrl} // Use constructed cover URL
        alt={title} // Alt text for accessibility
        loading="lazy" // Lazy loading for performance
        className="h-40 mx-auto mb-4 object-contain" // Styling: fixed height, centered, spaced below
        onError={(e) => {
          // Fallback: if image fails to load, replace with placeholder
          e.target.onerror = null;
          e.target.src = "https://via.placeholder.com/150x200?text=No+Cover";
        }}
      />

      {/* Book title */}
      <h3 className="font-semibold text-lg mb-1 text-black">
        {title || "Untitled Book"} {/* Fallback if title is missing */}
      </h3>

      {/* Author name */}
      <p className="text-sm text-gray-600">
        {author || "Unknown Author"} {/* Fallback if author is missing */}
      </p>

      {/* Publish year */}
      <p className="text-sm text-gray-500">
        {year || "Year N/A"} {/* Fallback if year is missing */}
      </p>
    </div>
  );
};

// Export the BookCard component for use in other parts of the app
export default BookCard;
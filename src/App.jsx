import { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";
import Loader from "./components/Loader";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

 const fetchBooks = async (query) => {
  setLoading(true);
  try {
    const res = await fetch(`https://openlibrary.org/search.json?title=${query}`);
    const data = await res.json();

    //  Filter books that have cover images
    const filteredBooks = data.docs.filter(book => book.cover_i);
    setBooks(filteredBooks.slice(0, 20)); // Limit to 20 results with covers
  } catch (error) {
    console.error("Error fetching books:", error);
    setBooks([]);
  }
  setLoading(false);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 p-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">📚 Book Finder</h1>
        <SearchBar onSearch={fetchBooks} />
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {books.map((book) => (
              <BookCard
                key={book.key}
                title={book.title}
                author={book.author_name?.[0]}
                year={book.first_publish_year}
                coverId={book.cover_i}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
// Loader component displays a loading message while book data is being fetched
const Loader = () => (
  // Container with centered text, subtle gray color, and pulsing animation for visual feedback
  <div className="text-center text-gray-500 text-lg animate-pulse">
    Loading books... {/* Message shown during API fetch */}
  </div>
);

// Export the Loader component for use in App.jsx or other parts of the app
export default Loader;
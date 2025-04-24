import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';

function App() {
  // State variables to manage tours, loading status, and error messages
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch tours from the API
  const fetchTours = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project");
      if (!response.ok) {
        throw new Error('Failed to fetch tours'); // Throw an error if the response is not OK
      }
      const data = await response.json();
      setTours(data); // Update tours state with fetched data
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(err.message); // Set error message if fetch fails
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  // useEffect to fetch tours when the component mounts
  useEffect(() => {
    fetchTours();
  }, []);

  // Function to remove a tour by filtering it out of the tours array
  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  // Conditional rendering for loading state
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Conditional rendering for error state
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  // Conditional rendering when no tours are left
  if (tours.length === 0) {
    return (
      <div className="app">
        <h2>No Tours Left</h2>
        <button onClick={fetchTours}>Refresh</button> {/* Button to refetch tours */}
      </div>
    );
  }

  // Render the Gallery component with the tours data
  return (
    <div className="app">
      <h1>Our Tours</h1>
      <Gallery tours={tours} onRemove={removeTour} /> {/* Pass tours and removeTour function as props */}
    </div>
  );
}

export default App;

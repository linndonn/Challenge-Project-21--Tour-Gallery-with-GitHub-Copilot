import React from 'react';
import TourCard from './TourCard';

function Gallery({ tours, onRemove }) {
  return (
    <div className="gallery">
      {/* Map over the tours array and render a TourCard for each tour */}
      {tours.map((tour) => (
        <TourCard
          key={tour.id} // Unique key for each tour
          id={tour.id}
          name={tour.name}
          info={tour.info}
          image={tour.image}
          price={tour.price}
          onRemove={onRemove} // Pass the onRemove function to handle tour removal
        />
      ))}
    </div>
  );
}

export default Gallery;
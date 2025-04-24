import React from 'react';

function TourCard({ id, name, info, image, price, onRemove }) {
  return (
    <div className="tour-card">
      {/* Display the tour image */}
      <img src={image} alt={name} className="tour-image" />
      <div className="tour-details">
        {/* Display the tour name */}
        <h2>{name}</h2>
        {/* Display the tour price */}
        <p className="tour-price">${price}</p>
        {/* Display the tour info */}
        <p className="tour-info">{info}</p>
        {/* Button to remove the tour */}
        <button className="not-interested-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </div>
  );
}

export default TourCard;
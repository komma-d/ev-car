import React from "react";

function CompareFooter({ compareCars }) {
  const carIds = compareCars.map((car) => car["Vehicle ID"]);

  return (
    <footer className="compare-footer">
      <p>Select up to three cars to compare:</p>
      <ul>
        {compareCars.map((car) => (
          <li key={car.id}>
            {car.Manufacturer} {car.Model}
          </li>
        ))}
      </ul>
      <a
        href={`/compare?cars=${carIds.join(",")}`}
        className="btn btn-primary"
      >
        Compare Cars
      </a>
    </footer>
  );
}

export default CompareFooter;

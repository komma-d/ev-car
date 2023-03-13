import React, { useState } from 'react'

export default function EVCarDetail({ car }) {
  // State to keep track of whether or not we're comparing this car
  const [comparing, setComparing] = useState(false)

  // Function to toggle the comparing state
  function toggleComparing() {
    setComparing((prevComparing) => !prevComparing)
  }

  return (
    <div>
      <h2>
        {car.Manufacturer} {car.Model}
      </h2>
      <p>Category: {car.Category}</p>
      <ul>
        <li>
          <strong>Fuel:</strong> {car.Fuel}
        </li>
        <li>
          <strong>Model Year:</strong> {car['Model Year']}
        </li>
        <li>
          <strong>Engine Size:</strong> {car['Engine Size']}
        </li>
        <li>
          <strong>Battery Capacity kWh:</strong> {car['Battery Capacity kWh']}
        </li>
        <li>
          <strong>PHEV Total Range:</strong> {car['PHEV Total Range']}
        </li>
      </ul>
      <button onClick={toggleComparing}>
        {comparing ? 'Stop Comparing' : 'Compare with Others'}
      </button>
    </div>
  )
}

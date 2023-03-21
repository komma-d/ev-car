// components/VehicleComparison.js
import React from "react";

function VehicleComparison({ vehicles }) {
	return (
		<div className="compare">
			<h2>Vehicle Comparison</h2>
			<div className="compare__stack">
				<table className="compare__table">
					<thead>
						<tr>
							<th scope="row"></th>
							{vehicles.map((vehicle, index) => (
								<th scope="col" key={index}>
									<div className="aspect-ratio ratio-1by1-5">
										<img src="https://via.placeholder.com/100" className="img-cover" />
									</div>
								</th>
							))}
						</tr>
						<tr>
							<th scope="row"></th>
							{vehicles.map((vehicle, index) => (
								<th scope="col" key={index}>
									{vehicle.Vehicle_Make} {vehicle.Vehicle_Model_Version}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">Price From DE</th>
							{vehicles.map((vehicle, index) => (
								<td key={index}>{vehicle.Price_From_DE}</td>
							))}
						</tr>
						<tr>
							<th scope="row">Drivetrain Power (HP)</th>
							{vehicles.map((vehicle, index) => (
								<td key={index}>{vehicle.Drivetrain_Power_HP}</td>
							))}
						</tr>
						<tr>
							<th scope="row">Range (WLTP)</th>
							{vehicles.map((vehicle, index) => (
								<td key={index}>{vehicle.Range_WLTP}</td>
							))}
						</tr>
						{/* Add more attributes here */}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default VehicleComparison;

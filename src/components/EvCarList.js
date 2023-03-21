import React from "react";
import Link from "next/link";

function EvCarList({ evCars, handleCompareClick }) {
	return (
		<div className="grid">
			<div className="grid__stack">
				{evCars.map((evCar) => (
					<div key={evCar.Vehicle_ID} className="grid__card card-style has-hover">
						<div class="grid__card_figure aspect-ratio ratio-16by9">
							<img src="https://via.placeholder.com/300" alt={`${evCar.Vehicle_Make} ${evCar.Vehicle_Model_Version}`} className="img-cover" />
						</div>
						<Link className="grid__card_caption" href={`/${evCar.Vehicle_ID}`}>
							<span className="hover-line">
								{evCar.Vehicle_Make} {evCar.Vehicle_Model_Version}
							</span>
						</Link>

						<div className="grid__card_body">
							<div class="grid__card_body_data">
								<strong>Price:</strong> {evCar.Price_From_DE} €
							</div>
							<div class="grid__card_body_data">
								<strong>Range (WLTP):</strong> {evCar.Range_WLTP} km
							</div>
							<div class="grid__card_body_data">
								<strong>Propulsion:</strong> {evCar.Drivetrain_Propulsion}
							</div>
							<div class="grid__card_body_data">
								<strong>Power:</strong> {evCar.Drivetrain_Power} kW ({evCar.Drivetrain_Power_HP} hp)
							</div>
							<div class="grid__card_body_data">
								<strong>Torque:</strong> {evCar.Drivetrain_Torque} Nm
							</div>
							<div class="grid__card_body_data">
								<strong>Acceleration:</strong> {evCar.Performance_Acceleration} sec (0-100 km/h)
							</div>
							<div class="grid__card_body_data">
								<strong>Top speed:</strong> {evCar.Performance_Topspeed} km/h
							</div>
						</div>
						<div className="grid__card_footer">
							<svg className="icon">
								<use xlinkHref="#iconSavings"></use>
							</svg>
							<Link
								className="compare-action"
								href="#"
								onClick={(e) => {
									e.preventDefault();
									handleCompareClick(evCar);
								}}>
								<svg className="icon">
									<use xlinkHref="#iconCompare"></use>
								</svg>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default EvCarList;

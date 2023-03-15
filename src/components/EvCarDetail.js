import React from "react";
import { useRouter } from "next/router";

function EvCarDetail({ evCar }) {
	const router = useRouter();
	const { Vehicle_ID } = router.query;
	const figures = Array.from({ length: 4 });

	return (
		<div className="details">
			{evCar ? (
				<div className="details__container">
					<div className="details__media">
						{figures.map(() => {
							return (
								<div className="details__media_figure aspect-ratio ratio-1by1-5">
									<img src="https://via.placeholder.com/1000" alt={`${evCar.Vehicle_Make} ${evCar.Vehicle_Model_Version}`} className="img-cover" />
								</div>
							);
						})}
					</div>
					<div className="details__data">
						<h1 className="">
							{evCar.Vehicle_Make} {evCar.Vehicle_Model_Version}
						</h1>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Price:</strong>
							</div>
							<div className="details__data_content">
								<span>{evCar.Price_From_DE} €</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Range (WLTP):</strong>
							</div>
							<div className="details__data_content">
								<span>{evCar.Range_WLTP} km</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Propulsion:</strong>
							</div>
							<div className="details__data_content">
								<span>{evCar.Drivetrain_Propulsion}</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Power:</strong>
							</div>
							<div className="details__data_content">
								<span>
									{evCar.Drivetrain_Power} kW ({evCar.Drivetrain_Power_HP} hp)
								</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Torque:</strong>
							</div>
							<div className="details__data_content">
								<span> {evCar.Drivetrain_Torque} Nm</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Acceleration:</strong>
							</div>
							<div className="details__data_content">
								<span>{evCar.Performance_Acceleration} sec (0-100 km/h)</span>
							</div>
						</div>
						<div className="details__data_block">
							<div className="details__data_caption">
								<strong>Top speed:</strong>
							</div>
							<div className="details__data_content">
								<span>{evCar.Performance_Topspeed} km/h</span>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="text-xl font-semibold">Car not found</div>
			)}
		</div>
	);
}

export default EvCarDetail;

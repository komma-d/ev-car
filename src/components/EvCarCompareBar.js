import React from "react";
import { useRouter } from "next/router";

function EvCarCompareBar({ cars, handleRemoveClick }) {
	const router = useRouter();

	function handleCompareButtonClick() {
		const carIds = cars.map((car) => car.Vehicle_ID).join(",");
		router.push(`/compare?carIds=${carIds}`);
	}

	return (
		<div className="compare-bar">
			<div className="compare-bar__track">
				{cars.map((car, index) => {
					return (
						<div className="compare-bar__car" key={car.Vehicle_ID}>
							<div className="compare-bar__car_img">
								<div className="aspect-ratio ratio-1by1-5">
									<img src="https://via.placeholder.com/200" className="img-cover" alt={`${car.Vehicle_Make} ${car.Vehicle_Model_Version}`} />
								</div>
							</div>
							<div className="compare-bar__car_caption">
								<div className="compare-bar__car_name">
									<strong className="d-block">{car.Vehicle_Make}</strong>
									{car.Vehicle_Model_Version}
								</div>
								<button type="button" className="btn btn-link compare-bar__car_remove" onClick={() => handleRemoveClick(index)}>
									remove
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="compare-bar__action">
				<button className="btn btn-primary" type="button" onClick={handleCompareButtonClick}>
					Compare
				</button>
			</div>
		</div>
	);
}

export default EvCarCompareBar;

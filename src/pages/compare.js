// pages/compare.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import VehicleComparison from "../components/VehicleComparison";
import { SUPABASE_CLIENT, SUPABASE_QUERY, SUPABASE_TABLE } from "../config/SupabaseClient";

function ComparePage() {
	const router = useRouter();
	const { carIds } = router.query;
	const selectedCarIds = carIds ? carIds.split(",") : [];

	const [selectedCars, setSelectedCars] = useState([]);

	useEffect(() => {
		async function fetchSelectedCars() {
			const { data, error } = await SUPABASE_CLIENT.from(SUPABASE_TABLE).select(SUPABASE_QUERY.select).in("Vehicle_ID", selectedCarIds);

			if (error) {
				console.error("Error fetching selected cars:", error);
			} else {
				setSelectedCars(data);
			}
		}

		if (selectedCarIds.length > 0) {
			fetchSelectedCars();
		}
	}, [selectedCarIds]);

	return (
		<div className="container">
			<h1>Compare Cars</h1>
			<VehicleComparison vehicles={selectedCars} />
		</div>
	);
}

export default ComparePage;

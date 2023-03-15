import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import EvCarList from "../components/EvCarList";
import EvCarFilter from "../components/EvCarFilter"; // import the new component

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const SUPABASE_TABLE = "bev_m1_new";
const SUPABASE_QUERY = {
	select:
		"Vehicle_ID, Vehicle_Make, Vehicle_Model_Version, Price_From_DE, Price_Grant_Umweltbonus_DE, Drivetrain_Propulsion, Drivetrain_Power, Drivetrain_Power_HP, Drivetrain_Torque, Performance_Acceleration, Performance_Topspeed, Range_WLTP, Range_Real",
};

console.log(SUPABASE_API_KEY);

function EvCarPage() {
	const [evCars, setEvCars] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let query = SUPABASE_CLIENT.from(SUPABASE_TABLE).select(SUPABASE_QUERY.select);
			const { data, error } = await query;
			console.log({ data, error }); // log the response to the console
			if (error) {
				console.error(error);
			} else {
				setEvCars(data);
			}
		}

		fetchData();
	}, []);

	const [filters, setFilters] = useState({
		make: "",
		price: "",
		range: "",
		grant: false,
	});

	function handleFilterChange(event) {
		const { name, value } = event.target;
		setFilters({ ...filters, [name]: value });
	}

	function handleCheckboxChange(event) {
		const { name, checked } = event.target;
		setFilters({ ...filters, [name]: checked });
	}

	const brands = Array.from(new Set(evCars.map((car) => car.Vehicle_Make)));

	const filteredCars = evCars.filter((car) => {
		const matchMake = !filters.make || car.Vehicle_Make === filters.make;
		const matchPrice =
			filters.price === "" ||
			(filters.price === "$" && car.Price_From_DE <= 30000) ||
			(filters.price === "$$" && car.Price_From_DE > 30000 && car.Price_From_DE <= 60000) ||
			(filters.price === "$$$" && car.Price_From_DE > 60000);
		const matchRange =
			filters.range === "" ||
			(filters.range === "250" && car.Range_WLTP <= 250) ||
			(filters.range === "500" && car.Range_WLTP > 250 && car.Range_WLTP <= 500) ||
			(filters.range === "750" && car.Range_WLTP > 500 && car.Range_WLTP <= 750) ||
			(filters.range === "1000" && car.Range_WLTP > 750);
		const matchGrant = !filters.grant || (filters.grant && car.Price_Grant_Umweltbonus_DE > 0);

		return matchMake && matchPrice && matchRange && matchGrant;
	});

	return (
		<>
			{/* <h1 className="e">Electric Cars</h1> */}
			<EvCarFilter brands={brands} filters={filters} handleFilterChange={handleFilterChange} handleCheckboxChange={handleCheckboxChange} />
			<EvCarList evCars={filteredCars} />
		</>
	);
}

export default EvCarPage;

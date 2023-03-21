// EvCarPage.js
import React, { useState, useEffect } from "react";
import EvCarList from "../components/EvCarList";
import EvCarFilter from "../components/EvCarFilter";
import EvCarCompareBar from "../components/EvCarCompareBar";
import VehicleComparison from "../components/VehicleComparison";
import { filterCars } from "../config/FilterConfig";
import { SUPABASE_CLIENT, SUPABASE_QUERY, SUPABASE_TABLE } from "../config/SupabaseClient";

function EvCarPage() {
	const [evCars, setEvCars] = useState([]);
	const [selectedCars, setSelectedCars] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let query = SUPABASE_CLIENT.from(SUPABASE_TABLE).select(SUPABASE_QUERY.select);
			const { data, error } = await query;
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

	const filteredCars = filterCars(evCars, filters);

	function handleCompareClick(car) {
		if (selectedCars.length < 10 && !selectedCars.includes(car)) {
			setSelectedCars([...selectedCars, car]);
		}
	}

	function handleRemoveClick(index) {
		const updatedCompareCars = [...selectedCars];
		updatedCompareCars.splice(index, 1);
		setSelectedCars(updatedCompareCars);
	}

	const [showComparison, setShowComparison] = useState(false);

	function handleCompareButtonClick() {
		setShowComparison(!showComparison);
	}

	function renderCompareBar() {
		if (selectedCars.length > 0) {
			return (
				<>
					<EvCarCompareBar cars={selectedCars} handleRemoveClick={handleRemoveClick} handleCompareButtonClick={handleCompareButtonClick} />
					{showComparison && <VehicleComparison vehicles={selectedCars} />}
				</>
			);
		} else {
			return null;
		}
	}

	return (
		<>
			<EvCarFilter brands={brands} filters={filters} handleFilterChange={handleFilterChange} handleCheckboxChange={handleCheckboxChange} />
			{renderCompareBar()}
			<EvCarList evCars={filteredCars} handleCompareClick={handleCompareClick} />
		</>
	);
}

export default EvCarPage;

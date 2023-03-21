// EvCarFilter.js
import React from "react";
import filterConfig from "../config/FilterConfig";

function EvCarFilter({ brands, filters, handleFilterChange, handleCheckboxChange }) {
	const updatedFilterConfig = filterConfig.map((filter) => {
		if (filter.id === "make") {
			return {
				...filter,
				options: [{ value: "", label: "All" }, ...brands.map((brand) => ({ value: brand, label: brand }))],
			};
		}
		return filter;
	});

	function renderFilterElement(filter) {
		if (filter.type === "select") {
			return (
				<div className="filter__element">
					<label className="filter__element_label" htmlFor={filter.id}>
						{filter.label}
					</label>
					<select name={filter.id} value={filters[filter.id]} onChange={handleFilterChange} className="filter__element_select">
						{filter.options.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
			);
		}

		if (filter.type === "checkbox") {
			return (
				<div className="filter__element flex items-center">
					<label className="filter__element_label" htmlFor={filter.id}>
						{filter.label}
					</label>
					<input type="checkbox" name={filter.id} checked={filters[filter.id]} onChange={handleCheckboxChange} className="filter__element_checkbox" />
				</div>
			);
		}

		return null;
	}

	return (
		<div className="filter">
			{updatedFilterConfig.map((filter) => (
				<React.Fragment key={filter.id}>{renderFilterElement(filter)}</React.Fragment>
			))}
		</div>
	);
}

export default EvCarFilter;

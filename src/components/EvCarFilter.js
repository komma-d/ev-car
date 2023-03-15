import React from "react";

function EvCarFilter({ brands, filters, handleFilterChange, handleCheckboxChange }) {
	return (
		<div className="filter">
			<div className="filter__element">
				<label className="filter__element_label" for="make">Brand:</label>
				<select name="make" value={filters.make} onChange={handleFilterChange} className="filter__element_select">
					<option value="">All</option>
					{brands.map((brand) => (
						<option key={brand} value={brand}>
							{brand}
						</option>
					))}
				</select>
			</div>
			<div className="filter__element">
				<label className="filter__element_label" for="price">Price:</label>
				<select name="price" value={filters.price} onChange={handleFilterChange} className="filter__element_select">
					<option value="">All</option>
					<option value="$">Up to €30,000</option>
					<option value="$$">€30,001 - €60,000</option>
					<option value="$$$">Over €60,000</option>
				</select>
			</div>
			<div className="filter__element">
				<label className="filter__element_label" for="range">Range:</label>
				<select name="range" value={filters.range} onChange={handleFilterChange} className="filter__element_select">
					<option value="">All</option>
					<option value="250">At least 250km</option>
					<option value="500">At least 500km</option>
					<option value="750">At least 750km</option>
					<option value="1000">At least 1000km</option>
				</select>
			</div>
			<div className="filter__element flex items-center">
				<label className="filter__element_label" for="grant">Umweltbonus:</label>
				<input type="checkbox" name="grant" checked={filters.grant} onChange={handleCheckboxChange} className="filter__element_checkbox" />
			</div>
		</div>
	);
}

export default EvCarFilter;

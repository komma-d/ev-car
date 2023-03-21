// filterConfig.js
const filterConfig = [
	{
		id: "make",
		label: "Brand:",
		type: "select",
		options: [],
	},
	{
		id: "price",
		label: "Price:",
		type: "select",
		options: [
			{ value: "", label: "All" },
			{ value: "1", label: "Up to €30,000" },
			{ value: "2", label: "€30,001 - €60,000" },
			{ value: "3", label: "Over €60,000" },
		],
	},
	{
		id: "range",
		label: "Range:",
		type: "select",
		options: [
			{ value: "", label: "All" },
			{ value: "250", label: "At least 250km" },
			{ value: "500", label: "At least 500km" },
			{ value: "750", label: "At least 750km" },
			{ value: "1000", label: "At least 1000km" },
		],
	},
	{
		id: "grant",
		label: "Umweltbonus:",
		type: "checkbox",
	},
];

export default filterConfig;

const filterOptions = {
	make: (car, value) => !value || car.Vehicle_Make === value,
	price: (car, value) => {
		if (value === "") return true;
		if (value === "1") return car.Price_From_DE <= 30000;
		if (value === "2") return car.Price_From_DE > 30000 && car.Price_From_DE <= 60000;
		if (value === "3") return car.Price_From_DE > 60000;
		return false;
	},
	range: (car, value) => {
		if (value === "") return true;
		if (value === "250") return car.Range_WLTP <= 250;
		if (value === "500") return car.Range_WLTP > 250 && car.Range_WLTP <= 500;
		if (value === "750") return car.Range_WLTP > 500 && car.Range_WLTP <= 750;
		if (value === "1000") return car.Range_WLTP > 750;
		return false;
	},
	grant: (car, value) => !value || (value && car.Price_Grant_Umweltbonus_DE > 0),
};

const filterCars = (evCars, filters) => {
	return evCars.filter((car) => Object.entries(filters).every(([key, value]) => filterOptions[key](car, value)));
};

export { filterOptions, filterCars };

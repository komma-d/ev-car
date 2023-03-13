import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { useRouter } from "next/router";
import CompareFooter from "../components/CompareFooter";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_API_KEY)

const SUPABASE_TABLE = "bev_m1_new";
const SUPABASE_QUERY = {
	select:
		"Vehicle_ID, Vehicle_Make, Vehicle_Model_Version, Price_From_DE, Price_Grant_Umweltbonus_DE, Drivetrain_Propulsion, Drivetrain_Power, Drivetrain_Power_HP, Drivetrain_Torque, Performance_Acceleration, Performance_Topspeed, Range_WLTP, Range_Real",
};

console.log(SUPABASE_API_KEY);

function EvCarList({ evCars }) {
	return (
		<div className="row">
			{evCars.map((evCar) => (
				<div key={evCar.Vehicle_ID} className="col-md-4 mb-3">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">
								<Link href={`/${evCar.Vehicle_ID}`}>
									<button>
										{evCar.Vehicle_Make} {evCar.Vehicle_Model_Version}
									</button>
								</Link>
							</h5>
							<p className="card-text">
								<strong>Price:</strong> {evCar.Price_From_DE} €
							</p>
							<p className="card-text">
								<strong>Range (WLTP):</strong> {evCar.Range_WLTP} km
							</p>
							<p className="card-text">
								<strong>Propulsion:</strong> {evCar.Drivetrain_Propulsion}
							</p>
							<p className="card-text">
								<strong>Power:</strong> {evCar.Drivetrain_Power} kW ({evCar.Drivetrain_Power_HP} hp)
							</p>
							<p className="card-text">
								<strong>Torque:</strong> {evCar.Drivetrain_Torque} Nm
							</p>
							<p className="card-text">
								<strong>Acceleration:</strong> {evCar.Performance_Acceleration} sec (0-100 km/h)
							</p>
							<p className="card-text">
								<strong>Top speed:</strong> {evCar.Performance_Topspeed} km/h
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

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

	return (
		<>
			<h1>Electric Cars</h1>
			<EvCarList evCars={evCars} />
			{/* <CompareFooter /> */}
		</>
	);
}

export default EvCarPage;

import React from "react";
import { createClient } from "@supabase/supabase-js";
import EvCarDetail from "../components/EVCarDetail.js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;
const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const SUPABASE_TABLE = "bev_m1_new";
const SUPABASE_QUERY = {
  select:
    "Vehicle_ID, Vehicle_Make, Vehicle_Model_Version, Price_From_DE, Price_Grant_Umweltbonus_DE, Drivetrain_Propulsion, Drivetrain_Power, Drivetrain_Power_HP, Drivetrain_Torque, Performance_Acceleration, Performance_Topspeed, Range_WLTP, Range_Real",
};

function EvCarDetailPage({ evCar }) {
  return <EvCarDetail evCar={evCar} />;
}

export async function getStaticPaths() {
  // get all the car ids from the database
  const { data, error } = await SUPABASE_CLIENT
    .from(SUPABASE_TABLE)
    .select("Vehicle_ID");

  if (error) {
    console.error(error);
    return {
      paths: [],
      fallback: true,
    };
  }

  // map the car ids to the params object expected by Next.js
  const paths = data.map((car) => ({ params: { Vehicle_ID: car.Vehicle_ID.toString() } }));

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  // fetch the car data for the specified id
  const { data, error } = await SUPABASE_CLIENT
    .from(SUPABASE_TABLE)
    .select(SUPABASE_QUERY.select)
    .eq("Vehicle_ID", params.Vehicle_ID)
    .single();

  if (error) {
    console.error(error);
    return {
      props: {
        evCar: null,
      },
    };
  }

  return {
    props: {
      evCar: data,
    },
  };
}

export default EvCarDetailPage;

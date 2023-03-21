import React from "react";
import EvCarDetail from "../components/EVCarDetail.js";
import { SUPABASE_CLIENT, SUPABASE_QUERY, SUPABASE_TABLE } from "../config/SupabaseClient";

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

import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
const table = "ev_cars";

export default function CarDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [car, setCar] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!id) return;
      const { data, error } = await supabase.from(table).select('*').eq("Vehicle ID", id).single();
      if (error) {
        console.error(error);
      } else {
        setCar(data);
      }
    }
    fetchData();
  }, [id]);

  if (!car) return <div>Loading...</div>;

  return (
    <div>
      <h1>{car.Manufacturer} {car.Model}</h1>
      <p><strong>Category:</strong> {car.Category}</p>
      <ul>
        <li><strong>Fuel:</strong> {car.Fuel}</li>
        <li><strong>Model Year:</strong> {car["Model Year"]}</li>
        <li><strong>Engine Size:</strong> {car["Engine Size"]}</li>
        <li><strong>Battery Capacity kWh:</strong> {car["Battery Capacity kWh"]}</li>
        <li><strong>PHEV Total Range:</strong> {car["PHEV Total Range"]}</li>
      </ul>
    </div>
  );
}

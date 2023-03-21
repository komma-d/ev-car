import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY;

const SUPABASE_CLIENT = createClient(SUPABASE_URL, SUPABASE_API_KEY);

const SUPABASE_TABLE = "bev_m1_new";
const SUPABASE_QUERY = {
  select:
    "Vehicle_ID, Vehicle_Make, Vehicle_Model_Version, Price_From_DE, Price_Grant_Umweltbonus_DE, Drivetrain_Propulsion, Drivetrain_Power, Drivetrain_Power_HP, Drivetrain_Torque, Performance_Acceleration, Performance_Topspeed, Range_WLTP, Range_Real",
};

export { SUPABASE_CLIENT, SUPABASE_QUERY, SUPABASE_TABLE };

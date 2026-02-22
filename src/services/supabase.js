/* eslint-disable no-undef */
import { createClient } from "@supabase/supabase-js";

console.log("🔍 Environment variables check:");
console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
console.log("VITE_SUPABASE_KEY exists:", !!import.meta.env.VITE_SUPABASE_KEY);
console.log("VITE_SUPABASE_KEY length:", import.meta.env.VITE_SUPABASE_KEY?.length);

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase environment variables!");
  console.error("supabaseUrl:", supabaseUrl);
  console.error("supabaseKey:", supabaseKey);
  throw new Error(
    "Missing Supabase environment variables. Make sure VITE_SUPABASE_URL and VITE_SUPABASE_KEY are set in your .env file and restart the dev server."
  );
}

console.log("✅ Supabase client initialized successfully");
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

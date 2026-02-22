import supabase from "./supabase";

// Transform database lowercase to camelCase for the app
function transformSettings(settings) {
  if (!settings) return settings;
  
  return {
    ...settings,
    minBookingLength: settings.minbookinglength,
    maxBookingLength: settings.maxbookinglength,
    maxGuestsPerBooking: settings.maxguestsperbooking,
    breakfastPrice: settings.breakfastprice
  };
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }
  return transformSettings(data);
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  // Transform camelCase to lowercase for database
  const dbSetting = {};
  if (newSetting.minBookingLength !== undefined) dbSetting.minbookinglength = newSetting.minBookingLength;
  if (newSetting.maxBookingLength !== undefined) dbSetting.maxbookinglength = newSetting.maxBookingLength;
  if (newSetting.maxGuestsPerBooking !== undefined) dbSetting.maxguestsperbooking = newSetting.maxGuestsPerBooking;
  if (newSetting.breakfastPrice !== undefined) dbSetting.breakfastprice = newSetting.breakfastPrice;
  
  const { data, error } = await supabase
    .from("settings")
    .update(dbSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq("id", 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be updated");
  }
  return transformSettings(data);
}

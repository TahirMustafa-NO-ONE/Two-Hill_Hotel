import supabase, { supabaseUrl } from "./supabase";

// Transform database lowercase to camelCase for the app
function transformCabin(cabin) {
  if (!cabin) return cabin;
  
  return {
    ...cabin,
    maxCapacity: cabin.maxcapacity,
    regularPrice: cabin.regularprice
  };
}

export async function getCabins() {
  console.log("📞 Calling getCabins API...");
  const { data, error } = await supabase.from("cabins").select("*");

  console.log("🏨 getCabins result:", { data, error });

  if (error) {
    console.error("❌ getCabins error:", error);
    throw new Error("Cabins could not be loaded");
  }

  return data?.map(transformCabin);
}

export async function createEditCabin(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // Transform camelCase to lowercase for database
  const cabinData = {
    name: newCabin.name,
    maxcapacity: newCabin.maxCapacity || newCabin.maxcapacity,
    regularprice: newCabin.regularPrice || newCabin.regularprice,
    discount: newCabin.discount,
    description: newCabin.description,
    image: imagePath
  };

  //1. Create cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) query = query.insert([cabinData]);

  // B) EDIT
  if (id) query = query.update(cabinData).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  //2. Upload image
  if (hasImagePath) return transformCabin(data);

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  //3. Delete the cabin if there was an error uploading image.
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin image could not be uploaded and cabin was not created"
    );
  }

  return transformCabin(data);
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}

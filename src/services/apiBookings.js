import { PAGE_SIZE } from "../utils/constants";
import { getToday } from "../utils/helpers";
import supabase from "./supabase";

// Transform database lowercase to camelCase for the app
function transformBooking(booking) {
  if (!booking) return booking;
  
  return {
    ...booking,
    startDate: booking.startdate,
    endDate: booking.enddate,
    numNights: booking.numnights,
    numGuests: booking.numguests,
    totalPrice: booking.totalprice,
    extrasPrice: booking.extrasprice,
    cabinPrice: booking.cabinprice,
    hasBreakfast: booking.hasbreakfast,
    isPaid: booking.ispaid,
    guestId: booking.guestid,
    cabinId: booking.cabinid,
    guests: booking.guests ? {
      ...booking.guests,
      fullName: booking.guests.fullname,
      nationalID: booking.guests.nationalid,
      countryFlag: booking.guests.countryflag
    } : booking.guests,
    cabins: booking.cabins
  };
}

export async function getBookings({ filter, sortBy, page }) {
  let query = supabase
    .from("bookings")
    .select(
      "id, created_at, startdate, enddate, numnights, numguests, status, totalprice, cabins(name), guests(fullname, email)",
      { count: "exact" }
    );

  //FILTER
  if (filter) query = query[filter.method || "eq"](filter.field, filter.value);

  //SORT
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("Bookings could not be loaded");
  }

  return { data: data?.map(transformBooking), count };
}

export async function getBooking(id) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, cabins(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return transformBooking(data);
}

// Returns all BOOKINGS that are were created after the given date. Useful to get bookings created in the last 30 days, for example.
export async function getBookingsAfterDate(date) {
  console.log("📞 Calling getBookingsAfterDate API with date:", date);
  const { data, error } = await supabase
    .from("bookings")
    .select("created_at, totalprice, extrasprice")
    .gte("created_at", date)
    .lte("created_at", getToday({ end: true }));

  console.log("📅 getBookingsAfterDate result:", { data, error });

  if (error) {
    console.error("❌ getBookingsAfterDate error:", error);
    throw new Error("Bookings could not get loaded");
  }

  return data?.map(transformBooking);
}

// Returns all STAYS that are were created after the given date
export async function getStaysAfterDate(date) {
  console.log("📞 Calling getStaysAfterDate API with date:", date);
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullname)")
    .gte("startdate", date)
    .lte("startdate", getToday());

  console.log("🛏️ getStaysAfterDate result:", { data, error });

  if (error) {
    console.error("❌ getStaysAfterDate error:", error);
    throw new Error("Bookings could not get loaded");
  }

  return data?.map(transformBooking);
}

// Activity means that there is a check in or a check out today
export async function getStaysTodayActivity() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, guests(fullname, nationality, countryflag)")
    .or(
      `and(status.eq.unconfirmed,startdate.eq.${getToday()}),and(status.eq.checked-in,enddate.eq.${getToday()})`
    )
    .order("created_at");

  // Equivalent to this. But by querying this, we only download the data we actually need, otherwise we would need ALL bookings ever created
  // (stay.status === 'unconfirmed' && isToday(new Date(stay.startDate))) ||

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  return data?.map(transformBooking);
}

export async function updateBooking(id, obj) {
  // Transform camelCase to lowercase for database
  const dbObj = {};
  if (obj.status) dbObj.status = obj.status;
  if (obj.isPaid !== undefined) dbObj.ispaid = obj.isPaid;
  if (obj.hasBreakfast !== undefined) dbObj.hasbreakfast = obj.hasBreakfast;
  if (obj.extrasPrice !== undefined) dbObj.extrasprice = obj.extrasPrice;
  if (obj.totalPrice !== undefined) dbObj.totalprice = obj.totalPrice;
  
  const { data, error } = await supabase
    .from("bookings")
    .update(dbObj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }
  return transformBooking(data);
}

export async function deleteBooking(bookingId) {
  // REMEMBER RLS POLICIES
  const { data, error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  return data;
}

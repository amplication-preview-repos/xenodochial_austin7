import { Booking as TBooking } from "../api/booking/Booking";

export const BOOKING_TITLE_FIELD = "experience";

export const BookingTitle = (record: TBooking): string => {
  return record.experience?.toString() || String(record.id);
};

import { User } from "../user/User";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  bookingDate: Date | null;
  totalPrice: number | null;
  status?: "Option1" | null;
  experience: string | null;
  user?: User | null;
};

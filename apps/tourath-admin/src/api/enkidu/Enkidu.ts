export type Enkidu = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  eventName: string | null;
  startDate: Date | null;
  endDate: Date | null;
  location: string | null;
  description: string | null;
  capacity: number | null;
  host: string | null;
};

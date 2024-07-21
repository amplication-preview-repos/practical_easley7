import { Amenity as TAmenity } from "../api/amenity/Amenity";

export const AMENITY_TITLE_FIELD = "id";

export const AmenityTitle = (record: TAmenity): string => {
  return record.id?.toString() || String(record.id);
};

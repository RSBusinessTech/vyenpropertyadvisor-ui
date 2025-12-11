export interface Property {
  id: number;
  customerId?: number;
  name: string;
  price: number;
  address: string;
  bedrooms?: number;
  bathrooms?: number;
  carParks?: number;
  furnishing: string;
  sizeSqft: number;
  imageUrls?: string[];
  amenities?: string[];
  commonFacilities?: string[];
  location?: string;
  videoURL?: string;
  isActive?: string; //Yes = show in UI, No = Don't show in UI.
}

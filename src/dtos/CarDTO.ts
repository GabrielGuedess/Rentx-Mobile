export interface Accessories {
  type: string;
  name: string;
}

interface Rent {
  period: string;
  price: number;
}
export interface Photos {
  id: string;
  photo: string;
}

export interface CarDTO {
  id: string;
  brand: string;
  name: string;
  about: string;
  rent: Rent;
  fuel_type: string;
  thumbnail: string;
  accessories: Accessories[];
  photos: Photos[];
}

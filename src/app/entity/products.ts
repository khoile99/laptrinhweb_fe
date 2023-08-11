export interface Products {
  id: number;
  name: string;
  price: number;
  description: string;
  brand: string | null;
  color: string | null;
  material: string | null;
  size: string | null;
  img: string[];
}

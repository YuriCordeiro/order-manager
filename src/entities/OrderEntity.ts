import { ProductEntity } from "./ProductEntity";

export class OrderEntity {
  id: string;
  products: ProductEntity[];
  paymentMethod: string;
  status: string[];
  value: number;
  // customer: Customer;
}
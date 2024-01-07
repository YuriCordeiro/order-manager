import { Customer } from './customer.entity';
import { Product } from './product.entity';

export class Order {
  id: string;
  products: Product[];
  paymentMethod: string;
  status: string[];
  value: number;
  customer: Customer;
}

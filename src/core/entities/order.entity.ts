import { Customer } from './customer.entity';
import { Product } from './product.entity';

export class Order {
  products: Product[];
  paymentMethod: string;
  status: string;
  value: number;
  customer: Customer;
}

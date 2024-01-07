import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product } from 'src/core/entities/product.entity';
import { Customer } from './customer.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  products: Array<Product>;
  @Prop()
  paymentMethod: string;
  @Prop()
  status: string;
  @Prop()
  value: string;
  @Prop()
  customer: Customer;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

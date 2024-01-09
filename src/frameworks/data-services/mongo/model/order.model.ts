import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { Customer, CustomerSchema } from './customer.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: [ProductSchema] })
  products: Product[];
  @Prop()
  paymentMethod: string;
  @Prop()
  status: string;
  @Prop()
  value: number;
  @Prop({ type: [CustomerSchema] })
  customer: Customer;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

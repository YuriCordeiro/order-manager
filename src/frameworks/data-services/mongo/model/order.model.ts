import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Customer } from 'src/core/entities/customer.entity';
import { Product } from 'src/core/entities/product.entity';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop()
  products: Product[];
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

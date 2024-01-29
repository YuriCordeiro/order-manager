import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { Customer, CustomerSchema } from './customer.model';
import { PaymentMethod as PaymentMethod, PaymentMethodSchema } from './payment.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: [ProductSchema] })
  products: Product[];
  @Prop({ type: PaymentMethodSchema })
  paymentMethod: PaymentMethod;
  @Prop()
  status: string;
  @Prop()
  value: number;
  @Prop({ type: CustomerSchema })
  customer: Customer;
  @Prop()
  queuePosition: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

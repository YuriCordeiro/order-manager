import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { PaymentMethod, PaymentMethodSchema } from './payment.model';
import { Customer, CustomerSchema } from './customer.model';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: [ProductSchema] })
  products: Product[];
  @Prop({ type: PaymentMethodSchema })
  paymentMethod: PaymentMethod;
  @Prop()
  total: number;
  @Prop({ type: CustomerSchema })
  customer: Customer;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { Customer, CustomerSchema } from './customer.model';
import { Transaction, TransactionSchema } from './transaction.model';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop({ type: [ProductSchema] })
  products: Product[];
  @Prop({ type: TransactionSchema })
  paymentTransaction: Transaction;
  @Prop()
  total: number;
  @Prop({ type: CustomerSchema })
  customer: Customer;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

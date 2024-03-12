import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { Customer, CustomerSchema } from './customer.model';
import { PaymentMethod as PaymentMethod, PaymentMethodSchema } from './payment.model';
import { Transaction, TransactionSchema } from './transaction.model';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: [ProductSchema] })
  products: Product[];
  @Prop({ type: TransactionSchema })
  paymentTransaction: Transaction;
  @Prop()
  status: string;
  @Prop()
  value: number;
  @Prop({ type: CustomerSchema })
  customer: Customer;
  @Prop()
  queuePosition: number;
  @Prop({ type: Date })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

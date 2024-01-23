import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Product, ProductSchema } from './product.model';
import { Customer, CustomerSchema } from './customer.model';
import { PaymentMethod as PaymentMethod, PaymentMethodSchema } from './payment.model';
//import * as mongoose from 'mongoose';
//import * as mongooseSequence from 'mongoose-sequence';

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
//  @Prop()
//  position: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

//OrderSchema.plugin(mongooseSequence(mongoose), {inc_field: 'position'})

//OrderSchema.index({position: 1});

//export const OrderModel = mongoose.model('Order', OrderSchema);

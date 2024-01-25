import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema()
export class Cart {
  @Prop()
  products: object[];
  @Prop()
  paymentMethod: string;
  @Prop()
  total: number;
  @Prop()
  customer: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);

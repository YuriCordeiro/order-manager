import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  name: string;
  @Prop()
  value: string;
  @Prop()
  quantity: string;
  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);

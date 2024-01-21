import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { Customer, CustomerSchema } from './model/customer.model';
import { MongoDataServices } from './mongo-data-services.service';
import { ConfigModule } from '@nestjs/config';
import { Product, ProductSchema } from './model/product.model';
import { Order, OrderSchema } from './model/order.model';
import { PaymentMethod, PaymentMethodSchema } from './model/payment.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
      { name: Product.name, schema: ProductSchema },
      { name: Order.name, schema: OrderSchema },
      { name: PaymentMethod.name, schema: PaymentMethodSchema }
    ]),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: MongoDataServices,
    },
  ],
  exports: [IDataServices],
})
export class MongoDataServicesModule {}

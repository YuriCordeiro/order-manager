import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductModule } from './modules/product.module';
import { OrderModule } from './modules/order.module';

@Module({
  imports: [ProductModule, OrderModule],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
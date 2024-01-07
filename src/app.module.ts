import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomerUseCaseModule } from './use-cases/customer.use-cases.module';
import { AppController } from './controllers/app.controller';
import { OrderController } from './controllers/order/order.controller';
import { ProductController } from './controllers/product/product.controller';
import { ProductUseCaseModule } from './use-cases/product.use-cases.module';
import { OrderUseCaseModule } from './use-cases/order.use-cases.module';

@Module({
  imports: [CustomerUseCaseModule, ProductUseCaseModule, OrderUseCaseModule],
  controllers: [
    AppController,
    CustomerController,
    ProductController,
    OrderController,
  ],
  providers: [],
})
export class AppModule {}

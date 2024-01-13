import { Module } from '@nestjs/common';

import { CustomerUseCaseModule } from './use-cases/customer.use-cases.module';
import { AppController } from './controllers/app.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductController } from './controllers/product/product.controller';
import { PaymentController } from './controllers/payment/payment.controller';
import { ProductUseCaseModule } from './use-cases/product.use-cases.module';
import { OrderUseCaseModule } from './use-cases/order.use-cases.module';
import { PaymentUseCaseModule } from './use-cases/payment.use-cases.module';

@Module({
  imports: [CustomerUseCaseModule, ProductUseCaseModule, OrderUseCaseModule, PaymentUseCaseModule],
  controllers: [
    AppController,
    CustomerController,
    ProductController,
    OrderController,
    PaymentController
  ],
  providers: [],
})

export class AppModule { }

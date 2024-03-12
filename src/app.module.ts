import { Module } from '@nestjs/common';

import { CustomerUseCaseModule } from './use-cases/customer/customer.use-cases.module';
import { AppController } from './controllers/app.controller';
import { OrderController } from './controllers/order/order.controller';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductController } from './controllers/product/product.controller';
import { PaymentController } from './controllers/payment/payment.controller';
import { ProductUseCaseModule } from './use-cases/product/product.use-cases.module';
import { OrderUseCaseModule } from './use-cases/order/order.use-cases.module';
import { PaymentUseCaseModule } from './use-cases/payment/payment.use-cases.module';
import { CartController } from './controllers/cart/cart.controller';
import { CartUseCaseModule } from './use-cases/cart/cart.use-cases.module';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { TransactionUseCaseModule } from './use-cases/transaction/transaction.use-cases.module';
import { WebhookController } from './controllers/webhook/webhook.controller';

@Module({
  imports: [CustomerUseCaseModule, ProductUseCaseModule, OrderUseCaseModule, PaymentUseCaseModule, CartUseCaseModule, TransactionUseCaseModule],
  controllers: [
    AppController,
    CustomerController,
    ProductController,
    OrderController,
    PaymentController,
    CartController,
    TransactionController,
    WebhookController
  ],
  providers: [],
})

export class AppModule { }

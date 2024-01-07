import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { ProductModule } from './modules/product.module';
import { OrderModule } from './modules/order.module';
import { CustomerUseCaseModule } from './use-cases/customer.use-cases.module';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [CustomerUseCaseModule, OrderModule, ProductModule],
  controllers: [AppController, CustomerController],
  providers: [],
})
export class AppModule {}
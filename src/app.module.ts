import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer.controller';
import { PaymentController } from './controllers/payment.controller';
import { PaymentService } from './services/payment.service';

@Module({
  imports: [],
  controllers: [CustomerController, PaymentController],
  providers: [PaymentService],
})
export class AppModule {}
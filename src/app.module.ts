import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [],
})
export class AppModule {}
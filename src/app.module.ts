import { Module } from '@nestjs/common';
import { CustomerController } from './controllers/customer/customer.controller';
import { CustomerUseCaseModule } from './use-cases/customer.use-cases.module';
import { AppController } from './controllers/app.controller';

@Module({
  imports: [CustomerUseCaseModule],
  controllers: [AppController, CustomerController],
  providers: [],
})
export class AppModule {}
import { Test, TestingModule } from '@nestjs/testing';
import { CustomerController } from './controllers/customer/customer.controller';

describe('AppController', () => {
  let customerController: CustomerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [],
    }).compile();

    
    customerController = app.get<CustomerController>(CustomerController);
  });
});

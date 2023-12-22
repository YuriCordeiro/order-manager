import { Controller, Get } from '@nestjs/common';

@Controller('customer')
export class CustomerController {
    
    @Get()
    async getAllCustomers() {

    }
}

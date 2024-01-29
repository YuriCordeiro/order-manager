import { Body, Controller, Get, Param, Post, Put, Delete, HttpStatus, HttpCode, Logger, Query, NotFoundException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CustomerDTO } from 'src/dto/customer.dto';
import { Customer } from 'src/frameworks/data-services/mongo/model/customer.model';
import { CustomerUseCases } from 'src/use-cases/customer/customer.use-case';

@ApiTags('Customers')
@Controller('customers')
export class CustomerController {

    private readonly logger = new Logger(CustomerController.name);

    constructor(private customerUseCases: CustomerUseCases) {

    }

    /**
     * 
     * @returns all customers
     */
    @Get()
    async getAllCustomers(): Promise<Customer[]> {
        this.logger.log(`getAllCustomers() - Start`);
        return this.customerUseCases.getAllCustomers();
    }

    /**
     * 
     * @param customer The whole information of a customer
     * @returns The registered customer
     */
    @Post()
    async createCustomer(@Body() customer: CustomerDTO): Promise<Customer> {
        this.logger.log(`createCustomer(CustomerDTO) - Start`);
        return this.customerUseCases.createCustomer(customer);
    }

    /**
     * 
     * @param customerId Id of the customer
     * @returns The registered Customer
     */
    @Get('/id/:customerId')
    async getCustomerById(@Param('customerId') customerId: string): Promise<Customer> {
        this.logger.log(`getCustomerById(string) - Start`);
        return this.customerUseCases.getCustomerById(customerId);
    }

    /**
     * 
     * @param customerCPF the string that represents the number of "Cadastro de Pessoa Física" of the customer
     * @returns The registered customer
     */
    @Get('/cpf/:customerCPF')
    async getCustomerByCPF(@Param('customerCPF') customerCPF: string) {
        this.logger.log(`getCustomerByCPF(string) - Start`);
        return this.customerUseCases.getCustomerByCPF(customerCPF);
    }

    /**
     * 
     * @param customerId The ID of the customer
     * @param customer The fields of the customer to be updated
     * @returns The updated customer
     */
    @Put('/:customerId')
    async updateCustomer(@Param('customerId') customerId: string,
        @Body() customer: CustomerDTO): Promise<Customer> {
        this.logger.log(`updateCustomer(string, CustomerDTO) - Start`);
        return this.customerUseCases.updateCustomer(customerId, customer);
    }

    /**
     * 
     * @param customerId The customer ID
     * @returns 
     */
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('/:customerId')
    async deleteCustomer(@Param('customerId') customerId: string): Promise<void> {
        this.logger.log(`deleteCustomer(string) - Start`);
        this.customerUseCases.delete(customerId);
    }
}

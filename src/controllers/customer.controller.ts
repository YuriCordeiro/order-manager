import { Body, Controller, Get, Param, Post, Put, Delete, HttpStatus, HttpCode } from '@nestjs/common';
import { CustomerDTO } from 'src/dto/customer.dto';
import { Customer } from 'src/core/entities/customer.entity';

@Controller('customer')
export class CustomerController {

    /**
     * 
     * @returns all customers
     */
    @Get()
    async getAllCustomers(): Promise<Customer[]> {
        return []
    }

    /**
     * 
     * @param customer The whole information of a customer
     * @returns The registered customer
     */
    @Post()
    async createCustomer(@Body() customer: CustomerDTO): Promise<Customer> {
        return
    }

    /**
     * 
     * @param customerId Id of the customer
     * @returns The registered Customer
     */
    @Get('/:customerId')
    async getCustomerById(@Param('customerId') customerId: string): Promise<Customer> {
        return
    }

    /**
     * 
     * @param customerCPF the string that represents the number of "Cadastro de Pessoa Física" of the customer
     * @returns The registered customer
     */
    @Get('/:customerCPF')
    async getCustomerByCPF(@Param('customerCPF') customerCPF: string): Promise<Customer> {
        return
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
        return
    }

    /**
     * 
     * @param customerId The customer ID
     * @returns 
     */
    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete('/:customerId')
    async deleteCustomer(@Param('customerId') customerId: string): Promise<void> {
        return
    }
}

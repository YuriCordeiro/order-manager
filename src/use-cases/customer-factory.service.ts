import { Injectable } from "@nestjs/common";
import { Customer } from "src/core/entities/customer.entity";
import { CustomerDTO } from "src/dto/customer.dto";

@Injectable()
export class CustomerFactoryService {

    /**
     * Convert DTO to Entity
     * @param customerDTO 
     * @returns 
     */
    createNewCustomer(customerDTO: CustomerDTO) {
        const newCustomer = new Customer();
        newCustomer.cpf = customerDTO.cpf;
        newCustomer.email = customerDTO.email;
        newCustomer.name = customerDTO.name;

        return newCustomer;
    }

    /**
     * Convert DTO to Entity
     * @param customerDTO 
     * @returns 
     */
    updateCustomer(customerDTO: CustomerDTO) {
        const updatedCustomer = new Customer();

        // Validates if field is filled
        if (customerDTO.name != null && customerDTO.name != '') {
            updatedCustomer.name = customerDTO.name;
        }

        if (customerDTO.cpf != null && customerDTO.cpf != '') {
            updatedCustomer.cpf = customerDTO.cpf;
        }

        if (customerDTO.email != null && customerDTO.email != '') {
            updatedCustomer.email = customerDTO.email;
        }

        return updatedCustomer;
    }
}
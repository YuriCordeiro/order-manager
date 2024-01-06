import { ProductEntity } from "src/entities/ProductEntity";

export class OrderDTO {
    products: ProductEntity[];
    paymentMethod: string;
    status: string[];
    value: number;
    // customer: Customer;
}
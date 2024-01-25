import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { CustomerFactoryService } from "./customer-factory.service";
import { CustomerDTO } from "src/dto/customer.dto";
import { Customer } from "src/frameworks/data-services/mongo/model/customer.model";
import { Cart } from "src/frameworks/data-services/mongo/model/cart.model";
import { CartFactoryService } from "./cart-factory.service";

@Injectable()
export class CartUseCases {

    constructor(private dataServices: IDataServices, private cartFactoryService: CartFactoryService) { }

    async getAllCarts(): Promise<Cart[]> {
        return this.dataServices.carts.getAll();
    }

    async createCart(): Promise<Cart> {
        const newCart = this.cartFactoryService.createNewCart();
        return this.dataServices.carts.create(newCart);
    }

    async getCartById(cartId: string): Promise<Cart> {
        if (cartId.match(/^[0-9a-fA-F]{24}$/)) {
            const foundCart = await this.dataServices.carts.get(cartId);

            if (foundCart != null) {
                return foundCart;
            } else {
                throw new NotFoundException(`Cart with id: ${cartId} not found at database.`);
            }
        } else {
            throw new BadRequestException(`'${cartId}' is not a valid ObjectID`);
        }
    }

    async addProductToCart(cartId: string, productId: string, quantity: number): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundProduct = await this.dataServices.products.get(productId);

        if (foundProduct != null) {
            foundCart.products.push({ product: productId, quantity: quantity });

            foundCart.total += foundProduct.value * quantity;

            return this.dataServices.carts.update(cartId, foundCart);
        } else {
            throw new NotFoundException(`Product with id: ${productId} not found at database.`);
        }
    }

    async addPaymentMethodToCart(cartId: string, paymentId: string): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundPayment = await this.dataServices.payments.get(paymentId);
        foundCart.paymentMethod = paymentId;

        return this.dataServices.carts.update(cartId, foundCart);
    }

    async addCustomerToCart(cartId: string, customerId: string): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundCustomer = await this.dataServices.customers.get(customerId);
        foundCart.customer = customerId;

        return this.dataServices.carts.update(cartId, foundCart);
    }
}

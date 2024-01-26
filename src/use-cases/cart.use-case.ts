import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { CustomerFactoryService } from "./customer-factory.service";
import { CustomerDTO } from "src/dto/customer.dto";
import { Customer } from "src/frameworks/data-services/mongo/model/customer.model";
import { Cart } from "src/frameworks/data-services/mongo/model/cart.model";
import { CartFactoryService } from "./cart-factory.service";
import { CartAddProductDTO } from "src/dto/cart-add-product.dto";
import { Product } from "src/frameworks/data-services/mongo/model/product.model";
import { ProductUseCases } from "./product.use-case";

@Injectable()
export class CartUseCases {

    constructor(private dataServices: IDataServices, private cartFactoryService: CartFactoryService, private productUseCase: ProductUseCases) { }

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

    async addProductToCart(cartId: string, productId: string, quantity: CartAddProductDTO): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundProduct = await this.productUseCase.getProductById(productId);
        foundProduct.quantity = quantity.quantity;

        this.validateProductQuantity(foundCart, foundProduct);
        foundCart.total += this.calculateProductQuantity(foundProduct);

        return this.dataServices.carts.update(cartId, foundCart);
    }

    async addPaymentMethodToCart(cartId: string, paymentId: string): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundPaymentMethod = await this.dataServices.payments.get(paymentId);
        foundCart.paymentMethod = foundPaymentMethod;

        return this.dataServices.carts.update(cartId, foundCart);
    }

    async addCustomerToCart(cartId: string, customerId: string): Promise<Cart> {
        const foundCart = await this.getCartById(cartId);
        const foundCustomer = await this.dataServices.customers.get(customerId);
        foundCart.customer = foundCustomer;

        return this.dataServices.carts.update(cartId, foundCart);
    }

    private validateProductQuantity(selectedCart: Cart, selectedProduct: Product): void {
        let cartContainProduct: boolean = false;
        selectedCart.products.forEach(product => {
            if (product.name === selectedProduct.name) {
                cartContainProduct = true;
                product.quantity += product.quantity;
                return;
            }
        });

        if (!cartContainProduct) {
            selectedCart.products.push(selectedProduct);
        }
    }

    private calculateProductQuantity(selectedProduct: Product): number {
        return selectedProduct.value * selectedProduct.quantity;
    }
}

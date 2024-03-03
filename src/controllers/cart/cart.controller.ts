import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Cart } from '../../frameworks/data-services/mongo/model/cart.model';
import { CartUseCases } from 'src/use-cases/cart/cart.use-case';
import { CartAddProductDTO } from 'src/dto/cart-add-product.dto';

@ApiTags('Carts')
@Controller('/carts')
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private cartUseCases: CartUseCases) { }

  @Post()
  async createCart(): Promise<Cart> {
    this.logger.log(`createCart() - Start`);
    return this.cartUseCases.createCart();
  }

  @Get()
  async getAllCarts() {
    this.logger.log(`getAllCarts() - Start`);
    return await this.cartUseCases.getAllCarts();
  }

  @Get('/id/:cartId')
  async getCartById(@Param('cartId') cartId: string): Promise<Cart> {
    this.logger.log(`getCartById(string) - Start`);
    return this.cartUseCases.getCartById(cartId);
  }

  @Put('/:cartId/products/:productId')
  async addProductToCart(
    @Param('cartId') cartId: string,
    @Param('productId') productId: string,
    @Body() quantity: CartAddProductDTO): Promise<Cart> {
    this.logger.log(`addProductToCart(string, string) - Start`);
    return this.cartUseCases.addProductToCart(cartId, productId, quantity);
  }

  @Put('/:cartId/payments/:paymentId')
  async addPaymentToCart(
    @Param('cartId') cartId: string,
    @Param('paymentId') paymentId: string,
  ): Promise<Cart> {
    this.logger.log(`addPaymentToCart(string, string) - Start`);
    return this.cartUseCases.addPaymentMethodToCart(cartId, paymentId);
  }

  @Put('/:cartId/customers/:customerId')
  async addCustomerToCart(
    @Param('cartId') cartId: string,
    @Param('customerId') customerId: string,
  ): Promise<Cart> {
    this.logger.log(`addCustomerToCart(string, string) - Start`);
    return this.cartUseCases.addCustomerToCart(cartId, customerId);
  }
}
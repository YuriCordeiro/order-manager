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
import { Cart } from '../../frameworks/data-services/mongo/entities/cart.model';
import { CartUseCases } from 'src/use-cases/cart/cart.use-case';
import { CartAddProductDTO } from 'src/dto/cart-add-product.dto';
import { TransactionUseCases } from 'src/use-cases/transaction/transaction.use-case';

@ApiTags('Carts')
@Controller('/carts')
export class CartController {
  private readonly logger = new Logger(CartController.name);

  constructor(private cartUseCases: CartUseCases, private transactionUseCases: TransactionUseCases) { }

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

  @Put('/:cartId/transactions/:transactionId')
  async addPaymentTransactionToCart(
    @Param('cartId') cartId: string,
    @Param('transactionId') transactionId: string,
  ): Promise<Cart> {
    this.logger.log(`addPaymentTransactionToCart(string, string) - Start`);
    return this.cartUseCases.addPaymentTransactionToCart(cartId, transactionId);
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

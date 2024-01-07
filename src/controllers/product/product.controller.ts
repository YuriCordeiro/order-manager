import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductUseCases } from 'src/use-cases/product.use-case';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/core/entities/product.entity';

@Controller('/products')
export class ProductController {
  private readonly logger = new Logger(ProductController.name);

  constructor(private productUseCases: ProductUseCases) {}

  @Post()
  async createProduct(@Body() ProductDTO: ProductDTO): Promise<Product> {
    this.logger.log(`createProduct(ProductDTO) - Start`);
    return this.productUseCases.createProduct(ProductDTO);
  }

  @Get()
  async getAllProducts() {
    this.logger.log(`getAllProducts() - Start`);
    return this.productUseCases.getAllProducts();
  }

  @Get('/id/:productId')
  async getProductById(
    @Param('productId') productId: string,
  ): Promise<Product> {
    this.logger.log(`getProductById(string) - Start`);
    return this.productUseCases.getProductById(productId);
  }

  @Put('/:productId')
  async updateProduct(
    @Param('productId') productId: string,
    @Body() productDTO: ProductDTO,
  ): Promise<Product> {
    this.logger.log(`updateProduct(string, ProductDTO) - Start`);
    return this.productUseCases.updateProduct(productId, productDTO);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId: string): Promise<void> {
    this.logger.log(`deleteProduct(String) - Start`);
    return this.productUseCases.deleteProduct(productId);
  }
}

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
import { ProductRepository } from "src/repositories/product.repository";

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}
  
  @Post()
  async createProduct(@Body() productDto: ProductDTO) {
    await this.productRepository.createProduct(productDto);
    return productDto;
  }

  @Get()
  async getAllProducts() {
    const products = await this.productRepository.getAllProducts();
    return products;
  }

  @Get('/:productId')
  async getProductById(@Param('productId') productId: string) {
    const product = await this.productRepository.getProductById(productId);
    return product;
  }

  @Put('/:productId')
  async updateProduct(@Param('productId') productId: string, @Body() productDTO: ProductDTO) {
    await this.productRepository.updateProduct(productId, productDTO);
    return {product: productId, message: "Product updated successfully"};
  }

  @Delete('/:productId')
  async deleteProduct(@Param('productId') productId: string) {
    await this.productRepository.deleteProduct(productId);
    return {product: productId, message: "Product deleted successfully"};
  }
}
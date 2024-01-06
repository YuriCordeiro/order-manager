import { Module } from "@nestjs/common";
import { ProductController } from "src/controllers/product/product.controller";
import { ProductRepository } from "src/repositories/product.repository";

@Module({
  controllers: [ProductController],
  providers: [ProductRepository],
})
export class ProductModule {
};
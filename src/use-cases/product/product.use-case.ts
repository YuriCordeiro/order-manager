import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { ProductFactoryService } from './product-factory.service';
import { ProductDTO } from 'src/dto/product.dto';
import { Product } from 'src/frameworks/data-services/mongo/entities/product.model';

@Injectable()
export class ProductUseCases {
  constructor(
    private dataServices: IDataServices,
    private productFactoryService: ProductFactoryService,
  ) { }

  getAllProducts(): Promise<Product[]> {
    return this.dataServices.products.getAll();
  }

  private isProductValid(foundProduct: Promise<Product>, id: string) {
    if (foundProduct != null) {
      return foundProduct;
    } else {
      throw new NotFoundException(
        `Product with id: ${id} not found at database.`,
      );
    }
  }

  getProductById(id: string): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      const foundProduct = this.dataServices.products.get(id);
      return this.isProductValid(foundProduct, id);
    } else {
      throw new BadRequestException(`'${id}' is not a valid ObjectID`);
    }
  }

  getProductByCategory(category: string): Promise<Product[]> {
    return this.dataServices.products.getProductByCategory(category);
  }

  createProduct(productDTO: ProductDTO): Promise<Product> {
    const newProduct = this.productFactoryService.createNewProduct(productDTO);
    return this.dataServices.products.create(newProduct);
  }

  updateProduct(productId: string, productDTO: ProductDTO): Promise<Product> {
    const newProduct = this.productFactoryService.updateProduct(productDTO);
    return this.dataServices.products.update(productId, newProduct);
  }

  deleteProduct(productId: string) {
    const foundProduct = this.getProductById(productId);
    this.isProductValid(foundProduct, productId);
    this.dataServices.products.delete(productId);
  }
}

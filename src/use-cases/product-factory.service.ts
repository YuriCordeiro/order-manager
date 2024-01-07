import { Injectable } from '@nestjs/common';
import { Product } from 'src/core/entities/product.entity';
import { ProductDTO } from 'src/dto/product.dto';

@Injectable()
export class ProductFactoryService {
  createNewProduct(productDTO: ProductDTO): Product {
    const product = new Product();
    product.name = productDTO.name;
    product.value = productDTO.value;
    product.quantity = productDTO.quantity;
    product.description = productDTO.description;
    return product;
  }

  updateProduct(productDTO: ProductDTO): Product {
    const updatedProduct = new Product();

    Object.entries(productDTO).forEach(([key, value]) => {
      if (key === 'id') return;
      updatedProduct[key] = value;
    });
    return updatedProduct;
  }
}

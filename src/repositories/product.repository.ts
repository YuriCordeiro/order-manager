import { Injectable } from "@nestjs/common";
import { ProductDTO } from "src/dto/product.dto";
import { ProductEntity } from "src/entities/ProductEntity";
import { v4 as uuid } from 'uuid';

@Injectable()
export class ProductRepository {
  private products: ProductEntity[] = [];

    async createProduct(productDto: ProductDTO) {
      const product = new ProductEntity();
      product.id = uuid();
      product.name = productDto.name;
      product.description = productDto.description;
      product.value = productDto.value;
      product.quantity = productDto.quantity;
      this.products.push(product);
    }

    async getAllProducts() {
      return this.products;
    }

    async getProductById(productId) {
      const selectedProduct = this.products.find(product => product.id === productId);

      if (!selectedProduct) {
        return {"message": "Product not found"};
      }

      return selectedProduct;
    }

    async updateProduct(productId: string, productDTO: Partial<ProductEntity>) {
      const selectedProduct = this.products.find(product => product.id === productId);

      if (!selectedProduct) {
        return {"message": "Product not found"};
      }

      Object.entries(productDTO).forEach(([key, value]) => {
        if (key === 'id') return;
        selectedProduct[key] = value;
      });
    }

    async deleteProduct(productId: string) {
      const selectedProduct = this.products.find(product => product.id === productId);

      if (!selectedProduct) {
        return {"message": "Product not found"};
      }

      this.products = this.products.filter(product => product.id !== productId);
    }
}

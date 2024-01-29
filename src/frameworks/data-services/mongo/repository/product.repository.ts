import { Product } from '../model/product.model';
import { MongoGenericRepository } from '../mongo-generic-repository';

export class ProductRepositoryImpl extends MongoGenericRepository<Product> {
  getProductByCategory(category: string) {
    return this._repository
      .find({ category: category })
      .exec();
  }
}

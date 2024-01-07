import { Product } from 'src/core/entities/product.entity';
import { MongoGenericRepository } from '../mongo-generic-repository';

export class ProductRepositoryImpl extends MongoGenericRepository<Product> {
  // getProductById(id: string) {
  //   return (
  //     this._repository
  //       //.find((user) => user.cpf == customerCPF)
  //       .find({ id: id })
  //       .populate(this._populateOnFind)
  //       .exec()
  //   );
  // }
}

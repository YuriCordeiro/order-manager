import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Customer } from 'src/frameworks/data-services/mongo/model/customer.model';
import { Product } from 'src/frameworks/data-services/mongo/model/product.model';

export class OrderDTO {
  @IsNotEmpty()
  @IsArray()
  readonly products: Product[];

  @IsNotEmpty()
  @IsString()
  readonly paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string;

  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsOptional()
  readonly customer: Customer;
}

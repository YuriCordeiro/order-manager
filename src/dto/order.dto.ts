import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Customer } from 'src/core/entities/customer.entity';
import { Product } from 'src/core/entities/product.entity';

export class OrderDTO {
  @IsNotEmpty()
  @IsArray()
  readonly products: Product[];

  @IsNotEmpty()
  @IsString()
  readonly paymentMethod: string;

  @IsNotEmpty()
  @IsString()
  readonly status: string[];

  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsOptional()
  readonly customer: Customer;
}

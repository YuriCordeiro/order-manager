import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ProductDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @IsNumber()
  @IsNotEmpty()
  readonly value: number;

  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @IsString()
  @IsNotEmpty()
  readonly description: string;
}

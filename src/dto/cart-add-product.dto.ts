import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CartAddProductDTO {
  
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;
}

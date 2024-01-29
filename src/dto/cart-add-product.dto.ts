import { ApiProperty } from "@nestjs/swagger";

export class CartAddProductDTO {
  
  @ApiProperty()
  readonly quantity: number;
}

import { ApiProperty } from "@nestjs/swagger";

export class CustomerDTO {
  
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly cpf: string;
  @ApiProperty()
  readonly email: string;
}

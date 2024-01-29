import { ApiProperty } from "@nestjs/swagger";

export class PaymentDTO {
    @ApiProperty()
    name: string;
    @ApiProperty()
    description: string;
}

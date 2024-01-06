import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDTO {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    value: number;

    @IsNumber()
    @IsNotEmpty()
    quantity: number;

    @IsString()
    @IsNotEmpty()
    description: string;
}

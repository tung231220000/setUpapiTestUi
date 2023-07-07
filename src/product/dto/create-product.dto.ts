import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @MinLength(3)
  name: string;

  price: string;

  quantity: number;
}

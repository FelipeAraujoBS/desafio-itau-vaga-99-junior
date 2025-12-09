import { IsDateString, IsNumber, Min } from 'class-validator';

export class CreateTransactionDto {
  @IsNumber()
  @Min(0)
  valor: number;

  @IsDateString()
  dataHora: string;
}

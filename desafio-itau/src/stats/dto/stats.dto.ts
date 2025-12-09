import { IsNumber } from 'class-validator';

export class GettingStatsDto {
  @IsNumber()
  count: number;

  @IsNumber()
  sum: number;

  @IsNumber()
  avg: number;

  @IsNumber()
  min: number;

  @IsNumber()
  max: number;
}

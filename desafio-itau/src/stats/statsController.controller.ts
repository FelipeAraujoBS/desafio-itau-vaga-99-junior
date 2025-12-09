import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { StatsService } from './statsService.service';
import { GettingStatsDto } from './dto/stats.dto';

@Controller('estatisticas')
export class StatsController {
  constructor(private readonly StatsService: StatsService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getEstatisticas(gettingStatsDto: GettingStatsDto): any {
    return this.StatsService.getEstatisticas(gettingStatsDto);
  }
}

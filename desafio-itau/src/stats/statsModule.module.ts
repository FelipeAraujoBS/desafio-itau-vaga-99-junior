import { Module } from '@nestjs/common';
import { StatsService } from './statsService.service';
import { TransModule } from 'src/transaction/transModule.module';
import { StatsController } from './statsController.controller';

@Module({
  imports: [TransModule],
  controllers: [StatsController],
  providers: [StatsService],
  exports: [StatsService],
})
export class StatsModule {}

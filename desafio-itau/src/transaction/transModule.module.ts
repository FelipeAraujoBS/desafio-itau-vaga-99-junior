import { Module } from '@nestjs/common';
import { TransController } from './transController.controller';
import { TransService } from './transService.service';

@Module({
  imports: [],
  controllers: [TransController],
  providers: [TransService],
  exports: [TransService],
})
export class TransModule {}

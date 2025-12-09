import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransModule } from './transaction/transModule.module';
import { StatsModule } from './stats/statsModule.module';

@Module({
  imports: [TransModule, StatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

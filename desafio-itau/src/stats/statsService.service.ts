import { Injectable } from '@nestjs/common';
import { GettingStatsDto } from './dto/stats.dto';
import { TransService } from 'src/transaction/transService.service';

@Injectable()
export class StatsService {
  constructor(private readonly transService: TransService) {}

  getEstatisticas(gettingStatsDto: GettingStatsDto): any {
    const AllTransactions = this.transService.getAll();

    const now = new Date();
    const lastMinute = new Date(now.getTime() - 60 * 1000);

    const recentTransactions = AllTransactions.filter((transaction) => {
      const transactionDate = new Date(transaction.dataHora);
      return transactionDate >= lastMinute && transactionDate <= now;
    });

    console.log('Total transactions:', AllTransactions.length);
    console.log('Recent transactions (last 60s):', recentTransactions.length);

    const count = recentTransactions.length;
    const sum = recentTransactions.reduce(
      (acc, transaction) => acc + transaction.valor,
      0,
    );
    const avg = count === 0 ? 0 : sum / count;
    const min =
      count === 0
        ? 0
        : Math.min(
            ...recentTransactions.map((transaction) => transaction.valor),
          );
    const max =
      count === 0
        ? 0
        : Math.max(
            ...recentTransactions.map((transaction) => transaction.valor),
          );

    return {
      count: count,
      sum: sum,
      avg: avg,
      min: min,
      max: max,
    };
  }
}

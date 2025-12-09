import { Injectable, Global } from '@nestjs/common';
import { CreateTransactionDto } from './dto/trans.dto';

interface Transaction {
  valor: number;
  dataHora: string;
}

@Global()
@Injectable()
export class TransService {
  private transactions: Transaction[] = [];

  createTransacao(createTransactionDto: CreateTransactionDto): any {
    const transaction = {
      valor: createTransactionDto.valor,
      dataHora: new Date().toISOString(),
    };

    this.transactions.push(transaction);
  }

  deleteTransacao(): void {
    this.transactions = [];
  }

  getTransacoes() {
    return {
      'transacoes.valor': this.transactions.map((t) => t.valor),
      'transacoes.dataHora': this.transactions.map((t) => t.dataHora),
    };
  }

  getAll(): ReadonlyArray<Transaction> {
    return [...this.transactions];
  }
}

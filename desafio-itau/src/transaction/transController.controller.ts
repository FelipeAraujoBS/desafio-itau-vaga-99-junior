import {
  Controller,
  Post,
  Delete,
  Get,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { TransService } from './transService.service';
import { CreateTransactionDto } from './dto/trans.dto';

@Controller('transacao')
export class TransController {
  constructor(private readonly transService: TransService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createTransacao(@Body() createTransactionDto: CreateTransactionDto): any {
    return this.transService.createTransacao(createTransactionDto);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteTransacao(): any {
    return this.transService.deleteTransacao();
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  getTransacoes(): any {
    return this.transService.getTransacoes();
  }
}

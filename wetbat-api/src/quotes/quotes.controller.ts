import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { QuoteService } from './quote.service';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async getQuotes(): Promise<any> {
    return await this.quoteService.getQuotes();
  }

  @Get(':id')
  async getQuote(@Param('id') id: number, @Res() res: Response): Promise<any> {
    const quote = await this.quoteService.getQuote(Number(id));
    if (quote === null) {
      res.status(HttpStatus.NOT_FOUND).send();
    } else {
      res.status(HttpStatus.OK).json(quote);
    }
  }
}

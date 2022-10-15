import { Controller, Get, Param } from '@nestjs/common';
import { QuoteService } from './quote.service';

@Controller('quotes')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}

  @Get()
  async getQuotes(): Promise<any> {
    return await this.quoteService.getQuotes();
  }

  @Get(':id')
  async getQuote(@Param('id') id: string): Promise<any> {
    return await this.quoteService.getQuote(id);
  }
}

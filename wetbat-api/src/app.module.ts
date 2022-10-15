import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuoteService } from './quotes/quote.service';
import { QuoteController } from './quotes/quotes.controller';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [QuotesModule],
  controllers: [AppController, QuoteController],
  providers: [AppService, QuoteService],
})
export class AppModule {}

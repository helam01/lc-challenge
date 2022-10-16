import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as moment from 'moment';

const prisma = new PrismaClient();

interface QuoteResumed {
  id: Number;
  name: String;
  from: String;
  destination: String;
  departure_date: String;
  return_date: String;
  travellers: Number;
  transportation: String;
}

interface QuoteContact {
  name: String;
  email: String;
  phone: String;
}

interface QuoteDetails {
  id: Number;
  from: String;
  destination: String;
  departure_date: String;
  return_date: String;
  travellers: Number;
  transportation: String;
  contact: QuoteContact;
}

const parseResumeQuoteInfo = (quote): QuoteResumed => {
  const quoteResumed = {
    id: quote.id,
    name: `${quote.contact.first_name} ${quote.contact.last_name}`,
    from: `${quote.origin.country} - ${quote.origin.airport}`,
    destination: `${quote.destination.country} - ${quote.destination.airport}`,
    departure_date: moment(quote.departure_date).format('YYYY-MM-DD'),
    return_date: moment(quote.return_date).format('YYYY-MM-DD'),
    transportation: quote.transportation.name,
    travellers: quote.travellers,
  };

  return quoteResumed;
};

const parseDetailQuoteInfo = (quote): QuoteDetails => {
  const quoteResumed = {
    id: quote.id,
    from: `${quote.origin.country} - ${quote.origin.airport}`,
    destination: `${quote.destination.country} - ${quote.destination.airport}`,
    departure_date: moment(quote.departure_date).format('YYYY-MM-DD'),
    return_date: moment(quote.return_date).format('YYYY-MM-DD'),
    transportation: quote.transportation.name,
    travellers: quote.travellers,
    contact: {
      name: `${quote.contact.first_name} ${quote.contact.last_name}`,
      email: quote.contact.email,
      phone: quote.contact.phone,
    },
  };

  return quoteResumed;
};

@Injectable()
export class QuoteService {
  async getQuotes(): Promise<{}> {
    return await new Promise(async (resolve) => {
      const quotes_response = await prisma.quote.findMany({
        include: {
          contact: true,
          origin: true,
          destination: true,
          transportation: true,
        },
      });

      const quotes = quotes_response.map((item) => {
        return parseResumeQuoteInfo(item);
      });

      resolve(quotes);
    });
  }

  async getQuote(id: number): Promise<{}> {
    return await new Promise(async (resolve) => {
      const quote_response = await prisma.quote.findUnique({
        where: { id: id },
        include: {
          contact: true,
          origin: true,
          destination: true,
          transportation: true,
        },
      });

      if (quote_response === null) {
        resolve(null);
      } else {
        const quote = parseDetailQuoteInfo(quote_response);

        resolve(quote);
      }
    });
  }
}

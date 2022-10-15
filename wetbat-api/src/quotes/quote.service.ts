import { Injectable } from '@nestjs/common';

@Injectable()
export class QuoteService {
  async getQuotes(): Promise<{}> {
    return await new Promise((resolve) => {
      const list = [
        {
          id: 1,
          name: 'Willian Smith',
          from: 'Londom',
          destination: 'China',
          departure_date: '2022-10-15',
          return_date: '2022-10-25',
          travellers: 2,
          transportation: 'rental car',
        },
        {
          id: 2,
          name: 'Willian Smith',
          from: 'Londom',
          destination: 'China',
          departure_date: '2022-10-15',
          return_date: '2022-10-25',
          travellers: 2,
          transportation: 'rental car',
        },
        {
          id: 3,
          name: 'Willian Smith',
          from: 'Londom',
          destination: 'China',
          departure_date: '2022-10-15',
          return_date: '2022-10-25',
          travellers: 2,
          transportation: 'rental car',
        },
      ];

      setTimeout(() => {
        resolve(list);
      }, 2000);
    });
  }

  async getQuote(id: string): Promise<{}> {
    return await new Promise((resolve) => {
      const quote = {
        id: 1,
        from: 'Canada',
        destination: 'China',
        departure_date: '2022-10-15',
        return_date: '2022-10-25',
        travellers: 2,
        transportation: 'rental car',
        contact: {
          name: 'Willian Smith',
          email: 'willian.s@email.com',
          phone: '555-34556',
        },
      };

      setTimeout(() => {
        resolve(quote);
      }, 2000);
    });
  }
}

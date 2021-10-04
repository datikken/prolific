import { Injectable } from '@nestjs/common';
import OpenAPI_ from '@tinkoff/invest-openapi-js-sdk';
import OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

@Injectable()
export class TinkoffService {
  api;
  constructor() {
    this.api = new (OpenAPI as any as typeof OpenAPI_)({
      apiURL: process.env.TINKOFF_SANDBOX_API_URL,
      secretToken: process.env.TINKOFF_SANDBOX_TOKEN,
      socketURL: process.env.TINKOFF_WS_URL,
    });
  }

  async getAppl() {
    const marketInstrument = await this.api.searchOne({ ticker: 'AAPL' });
    const { figi } = marketInstrument;
    await this.api.setCurrenciesBalance({ currency: 'USD', balance: 1000 });
    console.log(await this.api.setCurrenciesBalance({ currency: 'USD', balance: 1000 })); // 1000$ на счет
    console.log(await this.api.portfolioCurrencies());
    console.log(await this.api.instrumentPortfolio({ figi })); // В портфеле ничего нет
    console.log(await this.api.limitOrder({ operation: 'Buy', figi, lots: 1, price: 100 })); // Покупаем AAPL
    console.log(await this.api.instrumentPortfolio({ figi })); // Сделка прошла моментально
    console.log(await this.api.orderbookGet({ figi })); // получаем стакан по AAPL

    console.log(
      await this.api.candlesGet({
        from: '2019-08-19T18:38:33.131642+03:00',
        to: '2019-08-19T18:48:33.131642+03:00',
        figi,
        interval: '1min',
      }), // Получаем свечи за конкретный промежуток времени.
    );
  }
}

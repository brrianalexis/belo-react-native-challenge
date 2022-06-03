import { rest } from 'msw';

console.log('⚡️ Mock: handlers');

export const handlers = [
  rest.get(
    'https://api.coingecko.com/api/v3/simple/price',
    (_req, res, ctx) => {
      console.log('⚡️ Mock: coingecko');
      return res(
        // ctx.status(200),
        ctx.delay(1),
        ctx.json({
          ethereum: {
            usd: 1816.6,
          },
          solana: {
            usd: 38.99,
          },
          bitcoin: {
            usd: 29817,
          },
          tether: {
            usd: 1.001,
          },
          dai: {
            usd: 1.002,
          },
        }),
      );
    },
  ),
  rest.get(
    'https://api-dolar-argentina.herokuapp.com/api/dolarblue',
    (_req, res, ctx) => {
      console.log('⚡️ Mock: dolar blue');
      return res(
        // ctx.status(200),
        ctx.json({
          fecha: '2022/06/02 05:02:14',
          compra: '203.00',
          venta: '206.00',
        }),
      );
    },
  ),
  rest.get('*', (_req, res, ctx) => {
    console.log('⚡️ Mock: default');
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Hello World!',
      }),
    );
  }),
];

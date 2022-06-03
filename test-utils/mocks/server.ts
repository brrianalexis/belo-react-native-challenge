import { setupServer } from 'msw/node';
// import { setupServer } from 'msw/native';
import { handlers } from './handlers';

console.log('⚡️ Mock: setupServer');

export const server = setupServer(...handlers);

// import 'whatwg-fetch';
import '@testing-library/jest-native/extend-expect';
import AbortController from 'abort-controller';
import nodeFetch, { Headers, Request, Response } from 'node-fetch';
import { server } from './mocks/server';

console.log('⚡️ Mock: setup');

global.fetch = nodeFetch as any;
global.Headers = Headers as any;
global.Request = Request as any;
global.Response = Response as any;
global.AbortController = AbortController;

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
);

server.printHandlers();

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');
